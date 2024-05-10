import styled from 'styled-components'

export const StyledInput = styled.input`
	margin-top: 1.2rem;
	padding: 1.2rem;

	border-radius: .6rem;
	border: .1rem solid ${(props) => props.theme['base-border']};
	color: ${(props) => props.theme['base-text']};
	background-color: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.blue};
  }
`
