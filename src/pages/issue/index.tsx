import {
	ArrowUpRightFromSquareIcon,
	CalendarDayIcon,
	ChevronLeftIcon,
	Comment,
	CommentIcon,
	GitHubIcon,
	Logo
} from '@components'
import { Comment as IComment, Issue } from '@interfaces'
import { Context } from '@context'
import { dateUtils } from '@utils'
import { gitHubService } from '@services'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
	StyledDescription,
	StyledIssueHeader,
	StyledIssueInfo,
	StyledIssueLinks
} from './styles'
import { useContext, useEffect, useState } from 'react'

export function IssuePage() {
	const location = useLocation()
	const navigate = useNavigate()

	const [comments, setComments] = useState<IComment[]>([])

	const { issue }: { issue: Issue } = location.state
	const { repo, user } = useContext(Context)

	useEffect(() => {
		if (!issue || !repo || !user)
			navigate('/')
	}, [])

	const { commentsCount, createdAt, creatorNickname, description, id, title, url } = issue

	async function getComments() {
		const response = await gitHubService.getComments(id, repo!.name, user!.nickname)

		setComments(response)
  }

	useEffect(() => {
    getComments()
  }, [])

  return (
    <div id='app'>
			<Logo />

			<StyledIssueHeader>
				<StyledIssueLinks>
					<Link to={`/?user=${user!.nickname}&repo=${repo!.name}`}>
						<ChevronLeftIcon />
						VOLTAR
					</Link>

					<Link to={url}>
						VER NO GITHUB
						<ArrowUpRightFromSquareIcon />
					</Link>
				</StyledIssueLinks>

				<h1 className='title-l'>
					{title}
				</h1>

				<StyledIssueInfo className='text-m'>
					<span>
						<GitHubIcon />
						{creatorNickname}
					</span>

					<span>
						<CalendarDayIcon />
						{dateUtils.toDaysSinceIssueWasPublished(createdAt)}
					</span>

					<span>
						<CommentIcon />
						{`${commentsCount} comentário${
							commentsCount > 1 ? 's' : ''
						}`}
					</span>
				</StyledIssueInfo>
			</StyledIssueHeader>

			<main>
				<StyledDescription>{description}</StyledDescription>

				{comments.map(i => (
					<Comment key={i.id} comment={i} />
				))}
			</main>
    </div>
  )
}
