import { IISsue, IISsuesResponse } from '@interfaces'

export const issueMapper = {
  toDomain(issuesResponse: IISsuesResponse): IISsue[] {
    return issuesResponse.items.map((i) => {
      return {
        id: i.number,
        title: i.title,
        description: i.body,
        createdAt: i.created_at,
      }
    })
  },
}
