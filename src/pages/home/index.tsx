import { Context } from '@context'
import {
	Issue,
	Logo,
	SearchIssues,
	SearchUser,
	SelectRepo,
	User
} from '@components'
import { StyledFields, StyledIssues } from './styles'
import { useContext } from 'react'

export function HomePage() {
	const { filteredIssues, user } = useContext(Context)

  return (
    <div id='app'>
			<Logo />

			{user ? (
				<>
					<User />
					<StyledFields>
						<SelectRepo />
						<SearchIssues />
					</StyledFields>
				</>
				) : (
				<SearchUser />
			)}

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
