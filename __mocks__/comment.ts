import { Comment, CommentDto } from '@interfaces'
import { user, userDto } from './user'

export const comment: Comment = {
	id: 0,
	createdAt: new Date().toISOString(),
	message: 'Comentário qualquer',
	user
}

export const commentDto: CommentDto = {
	id: 0,
	body: 'Comentário qualquer',
	created_at: new Date().toISOString(),
	user: userDto
}
