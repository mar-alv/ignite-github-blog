import { comment } from '@mocks'
import { Comment } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Comment',
  component: Comment,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({...args}) => {
		return <Comment comment={args.comment} />
  }
} satisfies Meta<typeof Comment>

export default meta

export const Default: StoryObj = {
  args: {
		comment
  }
}
