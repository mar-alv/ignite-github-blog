import styled from 'styled-components'

export const StyledSelectRepo = styled.div`
  display: grid;
	position: relative;

	h3 {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const StyledSelectedRepo = styled.button`
	margin-top: 1.2rem;
	padding: 1.2rem;
	gap: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	border-radius: .6rem;
	border: .1rem solid ${(props) => props.theme['base-border']};
  font-size: 1.6rem;
	color: ${(props) => props.theme['base-text']};
	background-color: ${(props) => props.theme['base-input']};

  &:focus {
    outline: 2px solid ${(props) => props.theme.blue};
  }
`

export const StyledModal = styled.dialog`
	width: 100%;
	padding: 1.2rem;
	display: block;
	position: absolute;
	top: 110%;

	border-radius: .6rem;
	border: .1rem solid ${(props) => props.theme['base-border']};
	background-color: ${(props) => props.theme['base-input']};
`

export const StyledRepos = styled.ul`
	gap: 1rem;
	display: grid;
`

export const StyledRepo = styled.li`
	display: grid;

  font-size: 1.2rem;
	color: ${(props) => props.theme['base-text']};

	button {
		&:focus,
		&:hover {
			color: ${(props) => props.theme.blue};
		}
	}
`
