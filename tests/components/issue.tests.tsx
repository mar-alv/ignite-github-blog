import '@testing-library/jest-dom'
import { api } from '@libs'
import { App } from '../../src/app'
import { commentDto, issue, repo, user } from '@mocks'
import { customRender } from '../test-utils'
import { fireEvent, screen } from '@testing-library/react'

jest.mock('../../src/libs/axios')

describe('issue tests', () => {
	it('should redirect to the issue page', async () => {
		// arrange
		const response = {
			data: [commentDto]
		};

		(api.get as jest.Mock).mockResolvedValue(response);

		customRender(<App />, {
			filteredIssues: [issue],
			repo,
			user
		})

    // act
		const issueCard = screen.getByText('Test Issue')
		fireEvent.click(issueCard);

		// assert
		expect(screen.getByText('VER NO GITHUB')).toBeInTheDocument()
  })
})
