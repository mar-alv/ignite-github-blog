import { ReactNode } from 'react'
import { StyledHeader, StyledSearch } from './styles'

interface SearchProps {
	children: ReactNode
	onSearch(data: any): void
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
		<h3 className='title-s'>
			{title}
		</h3>
	)
}

interface SearchCounterProps {
	counter: number
	counterPluralText: string
	counterSingularText: string
}

export function SearchCounter({ counter, counterPluralText, counterSingularText }: SearchCounterProps) {
	return (
		<span className='text-s'>
			{counter} {`${counter > 1 || counter === 0 ? {counterPluralText} : {counterSingularText}}`}
		</span>
	)
}
