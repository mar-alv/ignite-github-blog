import { customRender } from '../../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { SearchUser } from '@components'

const meta = {
  title: 'Search/Search User',
  component: SearchUser,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: () => {
		return customRender(<SearchUser />, {
			async getUser(userName: string) {
				return Promise.resolve()
			}
		})
  }
} satisfies Meta<typeof SearchUser>

export default meta

export const Default: StoryObj = {}
