import '@testing-library/jest-dom'
import { act } from 'react';
import { App } from '../../src/app'
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { testUtils } from '../test-utils';

jest.mock('../../src/libs/axios')

describe('issue page tests', () => {
	it('should redirect to the home page', async () => {
		// arrange
		testUtils.mockGetUser();
		testUtils.mockGetIssues();

		act(() => {
			render(
				<BrowserRouter>
					<App />
				</BrowserRouter>
			)
		})

    // act
		await waitFor(() => {
			const issue = screen.getByText('Issue-1')
			fireEvent.click(issue);

			const returnLink = screen.getByText('VOLTAR')
			fireEvent.click(returnLink);
    });

		// assert
		act(() => {
			expect(screen.getByText('Publicações')).toBeInTheDocument()
		})
  })
})
