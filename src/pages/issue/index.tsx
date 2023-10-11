import { api } from '@libs'
import { Issue, IssueDto } from '@interfaces'
import { IssueBody } from './styles'
import { IssueProfile } from '@components'
import { issueMapper } from '@mappers'
import { useParams } from 'react-router-dom'
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
      <IssueProfile issue={issue} />
      <IssueBody>{issue.description}</IssueBody>
    </main>
  )
}
