import {
  ArrowUpRightFromSquareIcon,
  CalendarDayIcon,
  ChevronLeftIcon,
  CommentIcon,
  GitHubIcon,
} from '@components'
import { IssueBody, IssueHeader } from './styles'
import { Link } from 'react-router-dom'

// TODO:
// - Fetch issue info
// - Get user info from context
export function IssuePage() {
  return (
    <main>
      <IssueHeader>
        <Link to="/">
          <ChevronLeftIcon />
          VOLTAR
        </Link>
        <Link to="/">
          <ChevronLeftIcon />
          VER NO GITHUB
          <ArrowUpRightFromSquareIcon />
        </Link>
        <h1>Título da issue</h1>

        <p>
          <GitHubIcon />
          Users nick
        </p>

        <p>
          <CalendarDayIcon />
          Created at days
        </p>

        <p>
          <CommentIcon />
          Comments count
        </p>
      </IssueHeader>
      <IssueBody />
    </main>
  )
}
