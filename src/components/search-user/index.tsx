import { Context } from '@context'
import { Input, Search } from '@components'
import { urlUtils } from '@utils'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchUserSchema = z.object({
  user: z.string(),
})

type SearchUserInputs = z.infer<typeof SearchUserSchema>

export function SearchUser() {
	const { getUser } = useContext(Context)

	const [userName, setUserName] = useState(urlUtils.getParam('user'))

	async function handleGetUserOnUserNameChange() {
		await getUser(userName)
	}

	useEffect(() => {
		handleGetUserOnUserNameChange()
  }, [userName])

	function setUserOnUrl(query: string) {
		urlUtils.setParam('user', query)

		setUserName(query)
	}

	const { handleSubmit, register } = useForm<SearchUserInputs>({
    resolver: zodResolver(SearchUserSchema)
  })

  function handleSearchUser(data: SearchUserInputs) {
    setUserOnUrl(data.user)
  }

  return (
		<Search onSearch={handleSubmit(handleSearchUser)}>
			<Input name='user' placeholder='Buscar usuário' register={register} />
		</Search>
  )
}
