import { arrayUtils } from '@utils'
import { Issue, IssuesDto } from '@interfaces'

export const issuesMapper = {
  toDomain(issuesResponse: IssuesDto): Issue[] {
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
  }
}
