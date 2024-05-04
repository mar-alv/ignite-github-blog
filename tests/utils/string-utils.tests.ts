import { stringUtils } from '@utils'

describe('string utils tests', () => {
	it('should return the original string if the length is less or equal to 180', () => {
		// arrange
		const value = 'This is a short string'

		// act
		const shortenedValue = stringUtils.toShortened(value)

		// assert
		expect(shortenedValue).toBe(value)
	})

	it('should short the value and add ellipsis at the end if if the length is greater than 180', () => {
		// arrange
		const value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum velit nec elit convallis, ut condimentum quam malesuada. Proin consectetur tellus sit amet diam congue, nec tempor nibh eleifend.'
		const expectedValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum velit nec elit convallis, ut condimentum quam malesuada. Proin consectetur tellus sit amet diam congue,...'

		// act
		const shortenedValue = stringUtils.toShortened(value)

		// assert
		expect(shortenedValue).toBe(expectedValue)
	})

	it('should return an empty string if the value is null, undefined or empty', () => {
		// act
		const emptyValue = stringUtils.toShortened('')
		const nullValue = stringUtils.toShortened(null)
		const undefinedValue = stringUtils.toShortened(undefined)

		// assert
		expect(emptyValue).toBe('')
		expect(nullValue).toBe('')
		expect(undefinedValue).toBe('')
	})
})
