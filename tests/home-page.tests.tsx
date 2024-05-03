import '@testing-library/jest-dom'
import { act } from 'react';
import { App } from '../src/app'
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { testUtils } from './test-utils';

jest.mock('../src/libs/axios')

describe('home page tests', () => {
  it('should redirect to the respective clicked issue page', async () => {
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
    });

		// assert
		act(() => {
			expect(screen.getByText('VER NO GITHUB')).toBeInTheDocument()
		})
  })
})
