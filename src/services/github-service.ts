import { api } from '@libs'
import { commentsMapper, issuesMapper, userMapper } from '@mappers'
import { Repo } from '@interfaces'

export const gitHubService = {
	async getComments(issueId: number, repo: string, userName: string) {
		try {
			const response = await api.get(`/repos/${userName}/${repo}/issues/${issueId}/comments`)

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

			return issuesMapper.toDomain(response.data)
		} catch (e) {
			return []
		}
	},
	async getRepos(userName: string) {
		try {
			const response = await api.get(`/users/${userName}/repos`)

			return response.data as Repo[]
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

