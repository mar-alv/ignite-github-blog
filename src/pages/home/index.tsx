import { arrayUtils } from '@utils'
import { gitHubService } from '@services'
import { Issue as IIssue } from '@interfaces'
import { Issue, Logo, Search, User } from '@components'
import { StyledIssues } from './styles'
import { useCallback, useEffect, useState } from 'react'

export function HomePage() {
	const [issues, setIssues] = useState<IIssue[]>([])
	const [search, setSearch] = useState(() => {
		const url = new URL(String(window.location))

		return url.searchParams.get('search') ?? ''
	})

  const getIssues = useCallback(async() => {
		const response = await gitHubService.getIssues(search)

		setIssues(response)
  }, [])

	function onSearch(query: string) {
		const url = new URL(String(window.location))

		url.searchParams.set('search', query)

		window.history.pushState({}, '', url)

		setSearch(query)
	}

  useEffect(() => {
    getIssues()
  }, [search])

	const filteredIssues = arrayUtils.filterIssuesBySearch(issues, search)

  return (
    <div id='app'>
			<Logo />

      <User />

			<main>
				<Search issuesCount={filteredIssues.length} onSearch={onSearch} />

				<StyledIssues>
					{filteredIssues.map((i, index) => (
						<Issue key={i.id} issue={i} tabIndex={3 + index} />
					))}
				</StyledIssues>
			</main>
    </div>
  )
}
