import type { Meta, StoryObj } from '@storybook/react'
import { User } from '@components'
import { userDto } from '@mocks'

const meta = {
  title: 'User',
  component: User,
  parameters: {
    layout: 'centered',
		mockData: [
			{
				url: 'https://api.github.com/users/mar-alv',
				method: 'GET',
				status: 200,
				response: userDto
			}
		]
  },
  tags: ['autodocs'],
  render: () => <User />
} satisfies Meta<typeof User>

export default meta

export const Default: StoryObj = {}
