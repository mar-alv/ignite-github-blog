import styled from 'styled-components'

export const StyledSearch = styled.form`
  margin-top: 4.5rem;
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
	width: 100%;
	margin-top: 0.75rem;
	padding: 0.75rem;

	border-radius: 6px;
	border: 1px solid ${(props) => props.theme['base-border']};
	color: ${(props) => props.theme['base-text']};
	background-color: ${(props) => props.theme['base-input']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.blue};
  }
`
