import { api } from '@libs'
import {
	ArrowUpRightFromSquareIcon,
	CalendarDayIcon,
	ChevronLeftIcon,
	CommentIcon,
	GitHubIcon
} from '@components'
import { dateUtils } from '@utils'
import { Issue, IssueDto } from '@interfaces'
import { issueMapper } from '@mappers'
import { Link, useParams } from 'react-router-dom'
import {
	StyledDescription,
	StyledIssueHeader,
	StyledIssueInfo,
	StyledIssueLinks
} from './styles'
import { useCallback, useEffect, useState } from 'react'

export function IssuePage() {
  const { userNickname, issueId } = useParams()

  const [issue, setIssue] = useState<Issue | null>(null)

  const getIssue = useCallback(async () => {
    const response = await api.get(
      `/repos/${userNickname}/ignite-github-blog/issues/${issueId}`,
    )

    const data: IssueDto = response.data

    setIssue(issueMapper.toDomain(data))
  }, [userNickname, issueId])

  useEffect(() => {
    getIssue()
  }, [getIssue])

  if (!issue) return <></>

	const { commentsCount, createdAt, creatorNickname, description, title, url } = issue

  return (
    <div id='app'>
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

				<h1>{title}</h1>

				<StyledIssueInfo>
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
