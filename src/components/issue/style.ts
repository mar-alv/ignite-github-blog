import styled from 'styled-components'

export const StyledIssue = styled.article`
  padding: 2rem;

  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};

  &:focus,
  &:hover {
    outline: 2px solid ${(props) => props.theme.blue};
  }
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    max-width: 250px;

    color: ${(props) => props.theme['base-title']};
  }

  span {
    color: ${(props) => props.theme['base-span']};
  }
`

export const StyledDescription = styled.p`
	margin-top: 2rem;

	color: ${(props) => props.theme['base-text']};
`
