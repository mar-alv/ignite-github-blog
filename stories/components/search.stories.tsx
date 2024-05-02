import type { Meta, StoryObj } from '@storybook/react'
import { Search } from '@components'

const meta = {
  title: 'Search',
  component: Search,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: ({...args}) => {
		return (
			<Search issuesCount={args.issuesCount} onSearch={(query: string) => {}} />
		)
  }
} satisfies Meta<typeof Search>

export default meta

export const ZeroIssue: StoryObj = {
	args: {
		issuesCount: 0
	}
}

export const OneIssue: StoryObj = {
	args: {
		issuesCount: 1
	}
}

export const MoreIssues: StoryObj = {
	args: {
		issuesCount: 2
	}
}
