import { api } from '@libs'
import { Issue as IIssue } from '@interfaces'
import { Issue, Logo, Search, User } from '@components'
import { issueMapper } from '@mappers'
import { StyledIssues } from './styles'
import { useCallback, useEffect, useState } from 'react'

export function HomePage() {
	const [issues, setIssues] = useState<IIssue[]>([])
	const [search, setSearch] = useState(() => {
		const url = new URL(String(window.location))

		return url.searchParams.get('search') ?? ''
	})

  const getIssues = useCallback(async() => {
    const q = `${search} repo:mar-alv/ignite-github-blog`

    const response = await api.get('/search/issues', {
      params: {
        q,
      },
    })

    setIssues(issueMapper.toDomains(response.data))
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

	const filteredIssues = issues.filter((i) => i.title.includes(search))

  return (
    <div id='app'>
			<Logo />

      <User />

			<main>
				<Search issuesCount={issues.length} onSearch={onSearch} />

				<StyledIssues>
					{filteredIssues.map((i, index) => (
						<Issue key={i.id} issue={i} tabIndex={3 + index} />
					))}
				</StyledIssues>
			</main>
    </div>
  )
}
