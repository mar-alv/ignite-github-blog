import styled from 'styled-components'
import { StyledMarkdown } from '@libs'

export const StyledDescription = styled(StyledMarkdown)`
	margin-top: 4rem;
	padding: 2rem;

	border-radius: 1rem;
	border: .1rem solid ${(props) => props.theme['base-label']};
`

export const StyledIssueHeader = styled.header`
  padding: 3.2rem;

  border-radius: 1rem;
  background-color: ${(props) => props.theme['base-profile']};

  h1 {
    margin-top: 2rem;
  }
`

export const StyledIssueLinks = styled.div`
  display: flex;
  justify-content: space-between;

  a {
		gap: .8rem;
		display: flex;
		align-items: center;
  }
`

export const StyledIssueInfo = styled.div`
  margin-top: 0.8rem;
  gap: 2.4rem;
  display: flex;
	flex-wrap: wrap;

	span {
		gap: .8rem;
		display: flex;
		align-items: center;

		color: ${(props) => props.theme['base-span']};
	}

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
