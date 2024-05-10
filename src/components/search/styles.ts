import styled from 'styled-components'

export const StyledSearch = styled.form`
	display: grid;
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-span']};
  }
`

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
