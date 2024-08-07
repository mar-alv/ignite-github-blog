import { Context } from '@context'
import { Input, Search, SearchCounter, SearchHeader, SearchTitle } from '@components'
import { urlUtils } from '@utils'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchSchema = z.object({
  search: z.string(),
})

type SearchInputs = z.infer<typeof SearchSchema>

export function SearchIssues() {
	const { getIssues, filteredIssues, repo, user } = useContext(Context)

	const [search, setSearch] = useState(urlUtils.getParam('search'))

	const { handleSubmit, register } = useForm<SearchInputs>({
    resolver: zodResolver(SearchSchema)
  })

	useEffect(() => {
		handleGetOnSearchChange()
  }, [repo, search])

	async function handleGetOnSearchChange() {
		if (repo && user)
			await getIssues(repo.name, search, user.nickname)
	}

  function handleSearch(data: SearchInputs) {
    setSearchOnUrl(data.search)
  }

	function setSearchOnUrl(query: string) {
		urlUtils.setParam('search', query)

		setSearch(query)
	}

  return (
		<Search onSearch={handleSubmit(handleSearch)}>
			<SearchHeader>
				<SearchTitle title='Publicações' />
				<SearchCounter
					counter={filteredIssues.length}
					counterPluralText='publicações'
					counterSingularText='publicação'
				/>
			</SearchHeader>

			<Input name='search' placeholder='Buscar conteúdo' register={register} />
		</Search>
  )
}
