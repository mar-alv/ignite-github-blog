import { dateUtils, stringUtils } from '@utils'
import { Issue as IIssue } from '@interfaces'
import { IssueContainer, IssueHeader } from './style'
import { useNavigate } from 'react-router-dom'

interface Props {
  issue: IIssue
  tabIndex: number
}

export function Issue({ issue, tabIndex }: Props) {
  const { id, title, description, createdAt, creatorNickname } = issue

  const navigate = useNavigate()

  function handleSeeIssue() {
    navigate(`/issue/${creatorNickname}/${id}`)
  }

  return (
    <IssueContainer onClick={handleSeeIssue} tabIndex={tabIndex}>
      <IssueHeader>
        <h2>{title}</h2>
        <span>{dateUtils.toDaysSinceIssueWasPublished(createdAt)}</span>
      </IssueHeader>
      <p>{stringUtils.toShortened(description)}</p>
    </IssueContainer>
  )
}
