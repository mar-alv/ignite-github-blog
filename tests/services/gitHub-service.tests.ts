import { api } from '@libs'
import { comment, commentDto, issue, issuesDto, repo, user, userDto } from '@mocks'
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
      const response = await gitHubService.getComments(issueId, 'ignite-github-blog', 'mar-alv')

			// assert
      expect(api.get).toHaveBeenCalledWith(`/repos/mar-alv/ignite-github-blog/issues/${issueId}/comments`)
      expect(response).toEqual(comments)
    })

    it('should return an empty array if an error occurs', async () => {
			// arrange
      const issueId = 1;
			(api.get as jest.Mock).mockRejectedValue(new Error('Some error'))

			// act
      const response = await gitHubService.getComments(issueId, 'ignite-github-blog', 'mar-alv')

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
      (api.get as jest.Mock).mockResolvedValue(mockedResponse)

			// act
      const response = await gitHubService.getIssues('ignite-github-blog', search, 'mar-alv')

			// assert
      expect(api.get).toHaveBeenCalledWith('/search/issues', { params: { q: `${search} repo:mar-alv/ignite-github-blog` } })
      expect(response).toEqual(issues)
    })

    it('should return an empty array if an error occurs', async () => {
			// arrange
      const search = 'bug';
      (api.get as jest.Mock).mockRejectedValue(new Error('Some error'))

			// act
      const response = await gitHubService.getIssues('ignite-github-blog', search, 'mar-alv')

			// assert
      expect(api.get).toHaveBeenCalledWith('/search/issues', { params: { q: `${search} repo:mar-alv/ignite-github-blog` } })
      expect(response).toEqual([])
    })
  })

	describe('getRepos', () => {
		it('should return an array of repositories for a valid user', async () => {
			// Arrange
			const userName = 'mar-alv';
			const mockedResponse = [repo];
			(api.get as jest.Mock).mockResolvedValue({ data: mockedResponse });

			// Act
			const response = await gitHubService.getRepos(userName);

			// Assert
			expect(api.get).toHaveBeenCalledWith(`/users/${userName}/repos`);
			expect(response).toEqual(mockedResponse);
		});

		it('should return an empty array for an invalid user', async () => {
			// Arrange
			const userName = 'nonExistentUser';
			(api.get as jest.Mock).mockRejectedValue({});

			// Act
			const response = await gitHubService.getRepos(userName);

			// Assert
			expect(api.get).toHaveBeenCalledWith(`/users/${userName}/repos`);
			expect(response).toEqual([]);
		});
	});

  describe('getUser', () => {
		it('should return user information', async () => {
			// Arrange
			const mockedResponse = { data: userDto };
			(api.get as jest.Mock).mockResolvedValue(mockedResponse)

			// Act
			const response = await gitHubService.getUser('mar-alv')

			// Assert
			expect(api.get).toHaveBeenCalledWith('/users/mar-alv')
			expect(response).toEqual(user)
		})

		it('should return null if an error occurs', async () => {
			// Arrange
			(api.get as jest.Mock).mockRejectedValue(new Error('Some error'))

			// Act
			const response = await gitHubService.getUser('mar-alv')

			// Assert
			expect(api.get).toHaveBeenCalledWith('/users/mar-alv')
			expect(response).toBeNull()
		})
	})
})
