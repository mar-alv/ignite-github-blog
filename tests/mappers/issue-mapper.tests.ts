import { issue, issueDto, issuesDto } from '@mocks'
import { issuesMapper } from '@mappers'

describe('issuesMapper', () => {
  describe('toDomain', () => {
    it('should correctly map IssuesDto to an array of Issue objects', () => {
      // act
      const issues = issuesMapper.toDomain(issuesDto)

      // assert
      expect(issues.length).toBe(1)
      expect(issues[0]).toEqual(issue)
    })

    it('should filter out issues without body', () => {
      // arrange
      const issueDtoWithBody = issueDto
      const issueDtoWithoutBody = { ...issueDto, body: ''}

      const issuesDto = {
        items: [issueDtoWithBody, issueDtoWithoutBody],
      }

      // act
      const issues = issuesMapper.toDomain(issuesDto)

      // assert
      expect(issues.length).toBe(1)
    })

    it('should sort issues by created_at date', () => {
      // arrange
      const issueDto1 = {...issueDto, created_at: '2024-05-08T12:00:00Z'}
      const issueDto2 = {...issueDto, created_at: '2024-05-09T12:00:00Z'}

      const issuesDto = {
        items: [issueDto2, issueDto1]
      }

      const expectedIssues = [
				{...issue, createdAt: '2024-05-08T12:00:00Z'},
				{...issue, createdAt: '2024-05-09T12:00:00Z'}
			]

      // act
      const issues = issuesMapper.toDomain(issuesDto)

      // assert
      expect(issues).toEqual(expectedIssues)
    })
  })
})
