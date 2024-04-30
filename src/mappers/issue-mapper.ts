import { arrayUtils } from '@utils'
import { Issue, IssueDto, IssuesDto } from '@interfaces'

export const issueMapper = {
  toDomains(issuesResponse: IssuesDto): Issue[] {
    return issuesResponse.items.filter(i => !!i.body)
      .sort((a, b) => arrayUtils.sortByDate(a.created_at, b.created_at))
      .map((i) => {
        return {
          id: i.number,
          title: i.title,
          description: i.body,
          createdAt: i.created_at,
          url: i.html_url,
          commentsCount: i.comments,
          creatorNickname: i.user.login,
        }
      })
  },
  toDomain(issue: IssueDto): Issue {
    return {
      id: issue.number,
      title: issue.title,
      description: issue.body,
      createdAt: issue.created_at,
      url: issue.html_url,
      commentsCount: issue.comments,
      creatorNickname: issue.user.login,
    }
  },
}
