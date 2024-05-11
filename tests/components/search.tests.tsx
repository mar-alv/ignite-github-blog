import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SearchCounter } from '@components'

describe('search tests', () => {
	it('should show the singular text when there is only 1 item', () => {
		// arrange
		render(<SearchCounter counter={1} counterSingularText='Publicação' counterPluralText='Publicações' />)

		// assert
		expect(screen.queryByText('1 Publicação')).toBeInTheDocument()
		expect(screen.queryByText('1 Publicações')).not.toBeInTheDocument()
  })

	it('should show the plural text when there is more than 1 item', () => {
		// arrange
		render(<SearchCounter counter={2} counterSingularText='Publicação' counterPluralText='Publicações' />)

		// assert
		expect(screen.queryByText('2 Publicação')).not.toBeInTheDocument()
		expect(screen.queryByText('2 Publicações')).toBeInTheDocument()
  })
})
