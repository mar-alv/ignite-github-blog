import { arrayUtils } from '@utils'
import { Comment, CommentDto } from '@interfaces'
import { userMapper } from '@mappers'

export const commentsMapper = {
  toDomain(response: CommentDto[]): Comment[] {
    return response.filter(i => !!i.body)
      .sort((a, b) => arrayUtils.sortByDate(a.created_at, b.created_at))
      .map((i) => {
        return {
					id: i.id,
					createdAt: i.created_at,
					message: i.body,
					user: userMapper.toDomain(i.user)
        }
      })
  }
}
