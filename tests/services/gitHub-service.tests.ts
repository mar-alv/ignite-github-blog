import { api } from '@libs'
import { comment, commentDto, issue, issuesDto, user, userDto } from '@mocks'
import { gitHubService } from '@services'

jest.mock('../../src/libs/axios')

describe('gitHubService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getComments', () => {
    it('should return comments for a given issue', async () => {
			// arrange
      const issueId = 1
      const mockedRresponse = { data: [commentDto] }
      const comments = [comment];
      (api.get as jest.Mock).mockResolvedValue(mockedRresponse)

			// act
      const response = await gitHubService.getComments(issueId)

			// assert
      expect(api.get).toHaveBeenCalledWith(`/repos/mar-alv/ignite-github-blog/issues/${issueId}/comments`)
      expect(response).toEqual(comments)
    })

    it('should return an empty array if an error occurs', async () => {
			// arrange
      const issueId = 1;
			(api.get as jest.Mock).mockRejectedValue(new Error('Some error'))

			// act
      const response = await gitHubService.getComments(issueId)

			// assert
      expect(api.get).toHaveBeenCalledWith(`/repos/mar-alv/ignite-github-blog/issues/${issueId}/comments`)
      expect(response).toEqual([])
    })
  })

  describe('getIssues', () => {
    it('should return issues based on the search query', async () => {
			// arrange
      const search = 'Test Issue'
      const mockedResponse = { data: issuesDto }
      const issues = [issue];
      (api.get as jest.Mock).mockResolvedValue(mockedResponse);

			// act
      const response = await gitHubService.getIssues(search)

			// assert
      expect(api.get).toHaveBeenCalledWith('/search/issues', { params: { q: `${search} repo:mar-alv/ignite-github-blog` } })
      expect(response).toEqual(issues)
    })

    it('should return an empty array if an error occurs', async () => {
			// arrange
      const search = 'bug';
      (api.get as jest.Mock).mockRejectedValue(new Error('Some error'));

			// act
      const response = await gitHubService.getIssues(search)

			// assert
      expect(api.get).toHaveBeenCalledWith('/search/issues', { params: { q: `${search} repo:mar-alv/ignite-github-blog` } })
      expect(response).toEqual([])
    })
  })

  describe('getUser', () => {
    it('should return user information', async () => {
			// arrange
      const mockedResponse = { data: userDto };
      (api.get as jest.Mock).mockResolvedValue(mockedResponse);

			// act
      const response = await gitHubService.getUser()

			// assert
      expect(api.get).toHaveBeenCalledWith('/users/mar-alv')
      expect(response).toEqual(user)
    })

    it('should return null if an error occurs', async () => {
			// arrange
      (api.get as jest.Mock).mockRejectedValue(new Error('Some error'))

			// act
      const response = await gitHubService.getUser()

			// assert
      expect(api.get).toHaveBeenCalledWith('/users/mar-alv')
      expect(response).toBeNull()
    })
  })
})
