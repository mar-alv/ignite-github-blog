import { Context } from '@context'
import { Input, Search } from '@components'
import { urlUtils } from '@utils'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchSchema = z.object({
  user: z.string(),
})

type SearchInputs = z.infer<typeof SearchSchema>

export function SearchUser() {
	const { getUser } = useContext(Context)

	const [userName, setUserName] = useState(urlUtils.getParam('user'))

	const { handleSubmit, register } = useForm<SearchInputs>({
    resolver: zodResolver(SearchSchema)
  })

	useEffect(() => {
		handleGetOnChange()
  }, [userName])

	async function handleGetOnChange() {
		await getUser(userName)
	}

  function handleSearch(data: SearchInputs) {
    setUserOnUrl(data.user)
  }

	function setUserOnUrl(query: string) {
		urlUtils.setParam('user', query)

		setUserName(query)
	}

  return (
		<Search onSearch={handleSubmit(handleSearch)}>
			<Input name='user' placeholder='Buscar usuário' register={register} />
		</Search>
  )
}
