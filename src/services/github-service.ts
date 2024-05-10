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
	async getIssues(repo: string, search: string, userName: string) {
		try {
			const q = `${search} repo:${userName}/${repo}`

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
	async getUser(user: string) {
		try {
			if (!user)
				return null

			const response = await api.get(`/users/${user}`)

			return userMapper.toDomain(response.data)
		} catch (e) {
			return null
		}
	}
}
