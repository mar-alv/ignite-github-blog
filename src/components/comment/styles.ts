import styled from 'styled-components'
import { StyledMarkdown } from '@libs'

export const StyledComment = styled.article`
	column-gap: 1rem;
	display: grid;
	grid-template: auto auto / auto auto;
`

export const StyledCommentSeparator = styled.div`
	width: .1rem;
	height: 5.6rem;
	grid-column: span 2;
	justify-self: center;

	background-color: ${(props) => props.theme['base-label']};
`

export const StyledImg = styled.img`
	width: 4.8rem;
	height: 4.8rem;

	border-radius: 50%;
`

export const StyledText = styled.div`
	border-radius: 1rem;
	border: .1rem solid ${(props) => props.theme['base-label']};
`

export const StyledHeader = styled.div`
	padding: .8rem;
	gap: .4rem;
	display: flex;

	color: ${(props) => props.theme['base-subtitle']};
`

export const StyledName = styled.p`
	font-weight: bold;
`

export const StyledTextSeparator = styled.hr`
	width: 100%;
	height: .1rem;

	border-color: ${(props) => props.theme['base-label']};
`

export const StyledMessage = styled(StyledMarkdown)`
	padding: 2rem;
`
