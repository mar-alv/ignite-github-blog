import {
	ArrowUpRightFromSquareIcon,
	CalendarDayIcon,
	ChevronLeftIcon,
	CommentIcon,
	GitHubIcon,
	Logo
} from '@components'
import { dateUtils } from '@utils'
import { Issue } from '@interfaces'
import { Link, useLocation } from 'react-router-dom'
import {
	StyledDescription,
	StyledIssueHeader,
	StyledIssueInfo,
	StyledIssueLinks
} from './styles'

export function IssuePage() {
	const location = useLocation()
	const { issue }: { issue: Issue } = location.state

  if (!issue) return <></>

	const { commentsCount, createdAt, creatorNickname, description, title, url } = issue

  return (
    <div id='app'>
			<Logo />

			<StyledIssueHeader>
				<StyledIssueLinks>
					<Link to='/'>
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
			</main>
    </div>
  )
}
