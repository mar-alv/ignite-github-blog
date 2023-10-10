import { api } from '@libs'
import {
  ArrowUpRightFromSquareIcon,
  CalendarDayIcon,
  ChevronLeftIcon,
  CommentIcon,
  GitHubIcon,
} from '@components'
import { IssueBody, IssueHeader } from './styles'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

// TODO:
// - Fetch issue info
export function IssuePage() {
  async function getIssue() {
    const response = await api.get('/repos/mar-alv/ignite-github-blog/issues/1')

    console.log(response.data)
  }

  useEffect(() => {
    getIssue()
  }, [])

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
