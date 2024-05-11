import { ReactNode } from 'react'
import {
	StyledCounter,
	StyledHeader,
	StyledSearch,
	StyledTitle
} from './styles'

interface SearchProps {
	children: ReactNode
	onSearch(event: any): any;
}

export function Search({ children, onSearch }: SearchProps) {
  return (
    <StyledSearch onSubmit={onSearch}>
      {children}
    </StyledSearch>
  )
}

interface SearchHeaderProps {
	children: ReactNode
}

export function SearchHeader({ children }: SearchHeaderProps) {
	return (
		<StyledHeader>
			{children}
		</StyledHeader>
	)
}

interface SearchTitleProps {
	title: string
}

export function SearchTitle({ title }: SearchTitleProps) {
	return (
		<StyledTitle className='title-s'>
			{title}
		</StyledTitle>
	)
}

interface SearchCounterProps {
	counter: number
	counterPluralText: string
	counterSingularText: string
}

export function SearchCounter({ counter, counterPluralText, counterSingularText }: SearchCounterProps) {
	return (
		<StyledCounter className='text-s'>
			{counter} {`${counter > 1 || counter === 0 ? counterPluralText : counterSingularText}`}
		</StyledCounter>
	)
}
