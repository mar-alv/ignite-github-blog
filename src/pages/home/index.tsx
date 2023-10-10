import { api } from '@libs'
import { IISsue, IISsuesResponse } from '@interfaces'
import { Issue, Profile, SearchBar } from '@components'
import { issueMapper } from '@mappers'
import { Issues } from './styles'
import { useEffect, useState } from 'react'

export function HomePage() {
  const [issues, setIssues] = useState<IISsue[]>([])

  async function getIssues() {
    const response = await api.get(
      '/search/issues?q=repo:mar-alv/ignite-github-blog',
    )

    const data: IISsuesResponse = response.data

    setIssues(issueMapper.toDomain(data))
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
          <Issue key={i.id} issue={i} />
        ))}
      </Issues>
    </main>
  )
}
