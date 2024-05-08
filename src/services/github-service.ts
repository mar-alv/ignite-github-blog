import { api } from '@libs'
import { commentsMapper, issueMapper, userMapper } from '@mappers'

export const gitHubService = {
	async getComments(issueId: number) {
		try {
			const response = await api.get(`/repos/mar-alv/ignite-github-blog/issues/${issueId}/comments`)

			return commentsMapper.toDomain(response.data)
		} catch (e) {
			return []
		}
  },
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
