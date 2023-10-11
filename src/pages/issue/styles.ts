import Markdown from 'react-markdown'
import styled from 'styled-components'

export const IssueBody = styled(Markdown)`
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
