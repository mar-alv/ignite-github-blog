import type { Meta, StoryObj } from '@storybook/react'
import { SearchTitle } from '@components'

const meta = {
  title: 'Search/Search Title',
  component: SearchTitle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: ({...args}) => {
		return (
			<SearchTitle title={args.title} />
		)
  }
} satisfies Meta<typeof SearchTitle>

export default meta

export const Default: StoryObj = {
	args: {
		title: 'Publicações'
	}
}
