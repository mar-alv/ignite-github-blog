import type { Meta, StoryObj } from '@storybook/react'
import { SearchHeader } from '@components'

const meta = {
  title: 'Search/Search Header',
  component: SearchHeader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: () => {
		return (
			<SearchHeader>
				Content
			</SearchHeader>
		)
  }
} satisfies Meta<typeof SearchHeader>

export default meta

export const Default: StoryObj = {}
