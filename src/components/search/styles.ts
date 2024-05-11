import styled from 'styled-components'

export const StyledSearch = styled.form`
	display: grid;
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledTitle = styled.h3`
  color: ${(props) => props.theme['base-subtitle']};
`

export const StyledCounter = styled.span`
  color: ${(props) => props.theme['base-span']};
`
