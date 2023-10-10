import { Issue, IssuesDto } from '@interfaces'

export const issueMapper = {
  toDomain(issuesResponse: IssuesDto): Issue[] {
    return issuesResponse.items.map((i) => {
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
}
