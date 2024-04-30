import { customRender } from '../stories-utils'
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
		return customRender(
			<Issue issue={args.issue} tabIndex={args.tabIndex} />
		)
  }
} satisfies Meta<typeof Issue>

export default meta

export const Default: StoryObj = {
  args: {
		issue: {
			id: 0,
			title: 'Issue title',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			createdAt: new Date().toISOString(),
			creatorNickname: 'Creator'
		},
		tabIndex: 0
  }
}
