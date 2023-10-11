import { Issue as IssuePost, SearchBar, UserProfile } from '@components'
import { Issues } from './styles'
import { IssuesContext } from '@contexts'
import { useContext } from 'react'

export function HomePage() {
  const { issues } = useContext(IssuesContext)

  return (
    <main>
      <UserProfile />
      <SearchBar issuesCount={issues.length} />
      <Issues>
        {issues.map((i, index) => (
          <IssuePost key={i.id} issue={i} tabIndex={3 + index} />
        ))}
      </Issues>
    </main>
  )
}
