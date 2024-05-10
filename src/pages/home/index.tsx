import { Context } from '@context'
import {
	Issue,
	Logo,
	SearchIssues,
	SearchUser,
	User
} from '@components'
import { StyledIssues } from './styles'
import { useContext } from 'react'

export function HomePage() {
	const { filteredIssues, user } = useContext(Context)

  return (
    <div id='app'>
			<Logo />

			{user ? (
				<>
					<User />
					<SearchIssues />
				</>
				) : <SearchUser />}

			<main>
				<StyledIssues>
					{filteredIssues.map((i, index) => (
						<Issue key={i.id} issue={i} tabIndex={3 + index} />
					))}
				</StyledIssues>
			</main>
    </div>
  )
}
