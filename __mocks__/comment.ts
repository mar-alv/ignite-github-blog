import { Comment } from '@interfaces'
import { user } from './user'

export const comment: Comment = {
	id: 0,
	createdAt: new Date().toISOString(),
	message: 'Comentário qualquer',
	user
}
