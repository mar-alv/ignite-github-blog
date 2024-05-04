import { arrayUtils } from '@utils'
import { Issue } from '@interfaces'

describe('array utils tests', () => {
  describe('sortByDate', () => {
    it('should correctly sort dates in ascending order', () => {
      // arrange
      const dates = ['2024-05-04T12:00:00Z', '2024-05-03T12:00:00Z', '2024-05-05T12:00:00Z']

      // act
      const sortedDates = dates.sort(arrayUtils.sortByDate)

      // assert
      expect(sortedDates).toEqual(['2024-05-03T12:00:00Z', '2024-05-04T12:00:00Z', '2024-05-05T12:00:00Z'])
    })

    it('should correctly sort dates in descending order', () => {
      // arrange
      const dates = ['2024-05-04T12:00:00Z', '2024-05-03T12:00:00Z', '2024-05-05T12:00:00Z']

      // act
      const sortedDates = dates.sort((a, b) => arrayUtils.sortByDate(b, a))

      // assert
      expect(sortedDates).toEqual(['2024-05-05T12:00:00Z', '2024-05-04T12:00:00Z', '2024-05-03T12:00:00Z'])
    })

    it('should correctly handle equal dates', () => {
      // arrange
      const dates = ['2024-05-04T12:00:00Z', '2024-05-04T12:00:00Z', '2024-05-04T12:00:00Z']

      // act
      const sortedDates = dates.sort(arrayUtils.sortByDate)

      // assert
      expect(sortedDates).toEqual(['2024-05-04T12:00:00Z', '2024-05-04T12:00:00Z', '2024-05-04T12:00:00Z'])
    })
  })

  describe('filterIssuesBySearch', () => {
		const issues: Issue[] = [
			{
				id: 1,
				title: 'Bug fix',
				description: 'Fixes a bug in the system',
				createdAt: '2024-05-04T12:00:00Z',
				url: 'https://example.com/issue/1',
				commentsCount: 3,
				creatorNickname: 'JohnDoe',
			},
			{
				id: 2,
				title: 'Feature addition',
				description: 'Adds a new feature to the application',
				createdAt: '2024-05-03T10:00:00Z',
				url: 'https://example.com/issue/2',
				commentsCount: 1,
				creatorNickname: 'JaneDoe',
			},
			{
				id: 3,
				title: 'Documentation update',
				description: 'Updates the documentation for the project',
				createdAt: '2024-05-05T08:00:00Z',
				url: 'https://example.com/issue/3',
				commentsCount: 0,
				creatorNickname: 'AliceSmith',
			},
		]

		it('should filter issues by title', () => {
			// arrange
			const search = 'Bug'

			// act
			const filteredIssues = arrayUtils.filterIssuesBySearch(issues, search)

			// assert
			expect(filteredIssues).toEqual([issues[0]])
		})

		it('should filter issues by description', () => {
			// arrange
			const search = 'feature'

			// act
			const filteredIssues = arrayUtils.filterIssuesBySearch(issues, search)

			// assert
			expect(filteredIssues).toEqual([issues[1]])
		})

		it('should filter issues by both title and description', () => {
			// arrange
			const search = 'update'

			// act
			const filteredIssues = arrayUtils.filterIssuesBySearch(issues, search)

			// assert
			expect(filteredIssues).toEqual([issues[2]])
		})

		it('should return an empty array if no matching issues are found', () => {
			// arrange
			const search = 'non-existent'

			// act
			const filteredIssues = arrayUtils.filterIssuesBySearch(issues, search)

			// assert
			expect(filteredIssues).toEqual([])
		})

		it('should be case-insensitive', () => {
			// arrange
			const search = 'FIX'

			// act
			const filteredIssues = arrayUtils.filterIssuesBySearch(issues, search)

			// assert
			expect(filteredIssues).toEqual([issues[0]])
		})
	})
})
