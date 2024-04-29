import { dateUtils, stringUtils } from '@utils'
import { Issue as IIssue } from '@interfaces'
import { StyledDescription, StyledHeader, StyledIssue } from './style'
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
    <StyledIssue onClick={handleSeeIssue} tabIndex={tabIndex}>
      <StyledHeader>
        <h2 className='title-m'>
					{title}
				</h2>

        <span className='text-s'>
					{dateUtils.toDaysSinceIssueWasPublished(createdAt)}
				</span>
      </StyledHeader>

      <StyledDescription className='text-m'>
				{stringUtils.toShortened(description)}
			</StyledDescription>
    </StyledIssue>
  )
}
