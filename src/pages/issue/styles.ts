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

	h3 {
		font-size: 3.2rem;
	}

	h3 {
		font-size: 2rem;
	}

  a,
	p {
    font-size: 1.6rem;
  }

	p {
		max-width: initial;
	}

  li {
    font-size: 1.4rem;
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
