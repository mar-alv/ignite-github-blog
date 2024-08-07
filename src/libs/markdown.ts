import Markdown from 'react-markdown'
import styled from 'styled-components'

export const StyledMarkdown = styled(Markdown)`
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
`
