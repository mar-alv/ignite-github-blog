import Markdown from 'react-markdown'
import styled from 'styled-components'

export const StyledDescription = styled(Markdown)`
  margin-top: 2.5rem;

  color: ${(props) => props.theme['base-text']};

  p,
  h1,
  h2,
  h3 {
    margin-top: 1rem;
  }

  a {
    font-size: 1rem;
  }

  li {
    margin-top: 0.5rem;
  }

  img {
    max-width: 832px;
  }
`

export const StyledIssueHeader = styled.header`
  padding: 2rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};

  h1 {
    margin-top: 1.25rem;
  }
`

export const StyledIssueLinks = styled.div`
  display: flex;
  justify-content: space-between;

  a {
		gap: .5rem;
		display: flex;
		align-items: center;
  }
`

export const StyledIssueInfo = styled.div`
  margin-top: 0.5rem;
  gap: 1.5rem;
  display: flex;

	span {
		gap: .5rem;
		display: flex;
		align-items: center;

		color: ${(props) => props.theme['base-span']};
	}

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
