import {
  ArrowUpRightFromSquareIcon,
  CalendarDayIcon,
  ChevronLeftIcon,
  CommentIcon,
  GitHubIcon,
} from '@components'
import { dateUtils } from '@utils'
import { Issue } from 'src/interfaces'
import { Link } from 'react-router-dom'
import { ProfileContainer, ProfileHeader, ProfileInfo } from './styles'

interface Props {
  issue: Issue
}

export function IssueProfile({ issue }: Props) {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <Link to="/">
          <ChevronLeftIcon />
          VOLTAR
        </Link>
        <Link to={issue.url}>
          VER NO GITHUB
          <ArrowUpRightFromSquareIcon />
        </Link>
      </ProfileHeader>
      <h1>{issue.title}</h1>

      <ProfileInfo>
        <span>
          <GitHubIcon />
          {issue.creatorNickname}
        </span>

        <span>
          <CalendarDayIcon />
          {dateUtils.toDaysSinceIssueWasPublished(issue.createdAt)}
        </span>

        <span>
          <CommentIcon />
          {`${issue.commentsCount} comentário${
            issue.commentsCount > 1 ? 's' : ''
          }`}
        </span>
      </ProfileInfo>
    </ProfileContainer>
  )
}
