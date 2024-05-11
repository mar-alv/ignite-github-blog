import { customRender } from '../../stories-utils'
import { issue, repo, user } from '@mocks'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchIssues } from '@components'

const meta = {
  title: 'Search/Search Issues',
  component: SearchIssues,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: () => {
		return customRender(<SearchIssues />, {
			filteredIssues: [issue],
			user,
			repo,
			async getIssues(repo: string, search: string, userName: string) {
				return Promise.resolve()
			}
		})
  }
} satisfies Meta<typeof SearchIssues>

export default meta

export const Default: StoryObj = {}
