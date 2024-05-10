import { arrayUtils } from '@utils'
import { Context } from '@context'
import { gitHubService } from '@services'
import {
	Input,
	Logo,
	Search,
	SearchCounter,
	SearchHeader,
	SearchTitle,
	SearchUser,
	User
} from '@components'
import { useContext, useEffect, useState } from 'react'

export function HomePage() {
	const { getIssues, getUser, issues, user } = useContext(Context)
	const [search, setSearch] = useState(() => {
		const url = new URL(String(window.location))

		return url.searchParams.get('search') ?? ''
	})

  /* useEffect(() => {
    getIssues('ignite-github-blog', search, 'mar-alv')
  }, [search]) */

	const filteredIssues = arrayUtils.filterIssuesBySearch(issues, search)

  return (
    <div id='app'>
			<Logo />

			{user ? <User /> : <SearchUser />}

			<main>
				{/* <StyledIssues>
					{filteredIssues.map((i, index) => (
						<Issue key={i.id} issue={i} tabIndex={3 + index} />
					))}
				</StyledIssues> */}
			</main>
    </div>
  )
}
