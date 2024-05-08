import { api } from '@libs'
import { issueMapper, userMapper } from '@mappers'

export const gitHubService = {
	async getIsssues(search: string) {
		try {
			const q = `${search} repo:mar-alv/ignite-github-blog`

			const response = await api.get('/search/issues', {
				params: {
					q
				}
			})

			return issueMapper.toDomain(response.data)
		} catch (e) {
			return []
		}
	},
	async getUser() {
		try {
			const response = await api.get('/users/mar-alv')

			return userMapper.toDomain(response.data)
		} catch (e) {
			return null
		}
	}
}
