import { IISsue } from '@interfaces'
import { IssueContainer, IssueHeader } from './style'
import { dateUtils, stringUtils } from '@utils'

interface Props {
  issue: IISsue
}

export function Issue({ issue }: Props) {
  const { title, description, createdAt } = issue

  return (
    <IssueContainer>
      <IssueHeader>
        <h2>{title}</h2>
        <span>{dateUtils.toDaysSinceIssueWasPublished(createdAt)}</span>
      </IssueHeader>
      <p>{stringUtils.toShortened(description)}</p>
    </IssueContainer>
  )
}
