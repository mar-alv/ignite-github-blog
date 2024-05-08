import { User } from '../user'

export interface Comment {
	id: number
  createdAt: string
  message: string
	user: User
}
