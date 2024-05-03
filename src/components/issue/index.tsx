import { dateUtils, stringUtils } from '@utils'
import { Issue as IIssue } from '@interfaces'
import { memo } from 'react'
import { StyledDescription, StyledHeader, StyledIssue } from './style'
import { useNavigate } from 'react-router-dom'

interface Props {
  issue: IIssue
  tabIndex: number
}

function Component({ issue, tabIndex }: Props) {
  const { id, title, description, createdAt } = issue

  const navigate = useNavigate()

  function handleSeeIssue() {
    navigate(`/issue/${id}`, {
			state: {
				issue
			}
		})
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

export const Issue = memo(Component)
