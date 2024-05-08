import { Comment as IComment } from '@interfaces'
import { dateUtils } from '@utils'
import {
	StyledComment,
	StyledCommentSeparator,
	StyledHeader,
	StyledImg,
	StyledMessage,
	StyledName,
	StyledText,
	StyledTextSeparator
} from './styles'

interface Props {
	comment: IComment
}

export function Comment({ comment }: Props) {
	const { createdAt, message, user } = comment
	const { avatar, nickname } = user

	return (
		<StyledComment>
			<StyledCommentSeparator />

			<StyledImg src={avatar} alt='Imagem de avatar do usuário' />

			<StyledText>
				<StyledHeader className='text-m'>
					<StyledName>
						{nickname}
					</StyledName>

					comentou {dateUtils.toDaysSinceIssueWasPublished(createdAt).toLowerCase()}
				</StyledHeader>

				<StyledTextSeparator />

				<StyledMessage>
					{message}
				</StyledMessage>
			</StyledText>
		</StyledComment>
	)
}
