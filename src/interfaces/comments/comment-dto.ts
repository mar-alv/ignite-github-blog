import { UserDto } from '../user'

export interface CommentDto {
	id: number
  body: string
  created_at: string
	user: UserDto
}
