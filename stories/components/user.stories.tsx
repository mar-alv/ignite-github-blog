import { customRender } from '../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { User } from '@components'
import { user } from '@mocks'

const meta = {
  title: 'User',
  component: User,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: () => {
		return customRender(<User />, {
			user
		})
	}
} satisfies Meta<typeof User>

export default meta

export const Default: StoryObj = {}
