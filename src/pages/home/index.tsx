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
	User
} from '@components'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchUserSchema = z.object({
  user: z.string(),
})

type SearchUserInputs = z.infer<typeof SearchUserSchema>

export function HomePage() {
	const { getIssues, getUser, issues, user } = useContext(Context)
	const [search, setSearch] = useState(() => {
		const url = new URL(String(window.location))

		return url.searchParams.get('search') ?? ''
	})

	function onSearch(query: string) {
		const url = new URL(String(window.location))

		url.searchParams.set('search', query)

		window.history.pushState({}, '', url)

		setSearch(query)
	}

	const { handleSubmit, register } = useForm<SearchUserInputs>({
    resolver: zodResolver(SearchUserSchema)
  })

  async function handleSearchUser(data: SearchUserInputs) {
		await getUser(data.user)
  }

  /* useEffect(() => {
    getIssues('ignite-github-blog', search, 'mar-alv')
  }, [search]) */

	const filteredIssues = arrayUtils.filterIssuesBySearch(issues, search)

	console.log(user);

  return (
    <div id='app'>
			<Logo />

			<Search onSearch={handleSubmit(handleSearchUser)}>
				<SearchHeader>
					<SearchTitle title='Publicações' />
					<SearchCounter
						counter={filteredIssues.length}
						counterPluralText='publicações'
						counterSingularText='publicação'
					/>
				</SearchHeader>

				<Input name='user' register={register} />
			</Search>

      <User />

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
