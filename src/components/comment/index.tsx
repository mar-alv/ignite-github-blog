import { Comment as IComment } from '@interfaces'
import { dateUtils } from '@utils'
import { StyledComment, StyledMessage } from './styles'

interface Props {
	comment: IComment
}

export function Comment({ comment }: Props) {
	const { createdAt, message, user } = comment
	const { avatar, name } = user

	return (
		<StyledComment>
			<img src={avatar} alt='Imagem de avatar do usuário' />

			<div>
				{name} comentou {dateUtils.toDaysSinceIssueWasPublished(createdAt).toLowerCase()}

				<StyledMessage>
					{message}
				</StyledMessage>
			</div>
		</StyledComment>
	)
}
