import { api } from '@libs'
import {
  ArrowUpRightFromSquareIcon,
  CalendarDayIcon,
  ChevronLeftIcon,
  CommentIcon,
  GitHubIcon,
} from '@components'
import { dateUtils } from '@utils'
import { Issue, IssueDto } from '@interfaces'
import { IssueBody, IssueHeader } from './styles'
import { issueMapper } from '@mappers'
import { Link, useParams } from 'react-router-dom'
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

  return (
    <main>
      <IssueHeader>
        <Link to="/">
          <ChevronLeftIcon />
          VOLTAR
        </Link>
        <Link to={issue.url}>
          <ChevronLeftIcon />
          VER NO GITHUB
          <ArrowUpRightFromSquareIcon />
        </Link>
        <h1>{issue.title}</h1>

        <p>
          <GitHubIcon />
          {issue.creatorNickname}
        </p>

        <p>
          <CalendarDayIcon />
          {dateUtils.toDaysSinceIssueWasPublished(issue.createdAt)}
        </p>

        <p>
          <CommentIcon />
          {issue.commentsCount}
        </p>
      </IssueHeader>
      <IssueBody>{issue.description}</IssueBody>
    </main>
  )
}
