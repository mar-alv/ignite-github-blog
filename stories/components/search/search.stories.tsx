import type { Meta, StoryObj } from '@storybook/react'
import { Search } from '@components'

const meta = {
  title: 'Search/Search',
  component: Search,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: () => {
		return (
			<Search onSearch={(query: string) => {}}>
				Content
			</Search>
		)
  }
} satisfies Meta<typeof Search>

export default meta

export const Default: StoryObj = {}
