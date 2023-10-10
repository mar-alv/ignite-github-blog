import { IISsue } from '@interfaces'
import { IssueContainer, IssueHeader } from './style'
import { stringUtils } from '@utils'

interface Props {
  issue: IISsue
}

// TODO: Date must be converted
export function Issue({ issue }: Props) {
  const { title, description, createdAt } = issue

  return (
    <IssueContainer>
      <IssueHeader>
        <h2>{title}</h2>
        <span>Há {createdAt} dia</span>
      </IssueHeader>
      <p>{stringUtils.short(description)}</p>
    </IssueContainer>
  )
}
