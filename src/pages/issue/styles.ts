import Markdown from 'react-markdown'
import styled from 'styled-components'

export const StyledDescription = styled(Markdown)`
  margin-top: 4rem;

  color: ${(props) => props.theme['base-text']};

  p,
  h1,
  h2,
  h3 {
    margin-top: 1.6rem;
  }

  a {
    font-size: 1.6rem;
  }

  li {
    margin-top: 0.8rem;
  }

  img {
    max-width: 83.2rem;
  }
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
