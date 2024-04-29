import styled from 'styled-components'

export const StyledLogo = styled.div`
	gap: 2rem;
	display: grid;
	justify-items: center;
	top: 6.4rem;
	left: 50%;
	transform: translateX(-50%);
	position: absolute;

	font-family: 'Coda', system-ui, sans-serif;
	font-weight: bold;
  color: ${(props) => props.theme['blue']};
`
