import { customRender } from '../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { User } from '@components'

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
				response: {
					avatar_url: 'https://avatars.githubusercontent.com/u/101023750?v=4',
					name: 'Marcelo Alvarez',
					html_url: 'https://github.com/mar-alv',
					bio: '🚀 Desenvolvedor Front-end @Terra via CWI, criando ótimas experiências de finalização de compras no time Digital Smart Sales',
					login: 'mar-alv',
					company: 'CWI Software',
					followers: 2
				}
			}
		]
  },
  tags: ['autodocs'],
  render: () => {
		return customRender(
			<User />
		)
  }
} satisfies Meta<typeof User>

export default meta

export const Default: StoryObj = {}
