import { Issue, Search, User } from '@components'
import { IssuesContext } from '@contexts'
import { StyledIssues } from './styles'
import { useContext } from 'react'

export function HomePage() {
  const { issues } = useContext(IssuesContext)

  return (
    <div id='app'>
      <User />

			<main>
				<Search issuesCount={issues.length} />

				<StyledIssues>
					{issues.map((i, index) => (
						<Issue key={i.id} issue={i} tabIndex={3 + index} />
					))}
				</StyledIssues>
			</main>
    </div>
  )
}
