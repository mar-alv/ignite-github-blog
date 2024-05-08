import { BrowserRouter } from 'react-router-dom'
import { issue } from '@mocks'
import { Issue } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Issue',
  component: Issue,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({...args}) => {
		return (
			<BrowserRouter>
				<Issue issue={args.issue} tabIndex={args.tabIndex} />
			</BrowserRouter>
		)
  }
} satisfies Meta<typeof Issue>

export default meta

export const Default: StoryObj = {
  args: {
		issue,
		tabIndex: 0
  }
}
