import { api } from '@libs'
import { Issue, IssuesDto } from '@interfaces'
import { Issue as IssuePost, Profile, SearchBar } from '@components'
import { issueMapper } from '@mappers'
import { Issues } from './styles'
import { useEffect, useState } from 'react'

export function HomePage() {
  const [issues, setIssues] = useState<Issue[]>([])

  async function getIssues() {
    const response = await api.get(
      '/search/issues?q=repo:mar-alv/ignite-github-blog',
    )

    const data: IssuesDto = response.data

    setIssues(issueMapper.toDomains(data))
  }

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <main>
      <Profile />
      <SearchBar issuesCount={issues.length} />
      <Issues>
        {issues.map((i) => (
          <IssuePost key={i.id} issue={i} />
        ))}
      </Issues>
    </main>
  )
}