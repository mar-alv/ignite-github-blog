import styled from 'styled-components'

export const StyledIssue = styled.article`
  padding: 3.2rem;

  cursor: pointer;
  border-radius: 1.0rem;
  background-color: ${(props) => props.theme['base-post']};

  &:focus,
  &:hover {
    outline: .2rem solid ${(props) => props.theme.blue};
  }
`

export const StyledHeader = styled.div`
	row-gap: .4rem;
	display: flex;
	flex-wrap: wrap;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme['base-title']};
  }

  span {
    color: ${(props) => props.theme['base-span']};
  }
`

export const StyledDescription = styled.p`
	margin-top: 3.2rem;

	color: ${(props) => props.theme['base-text']};
`
