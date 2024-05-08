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
		comment: {
			id: 0,
			createdAt: '2023-10-10T17:38:58Z',
			message: 'Comentário qualquer',
			user: {
				avatar: 'https://github.com/mar-alv.png',
				name: 'Marcelo Alvarez',
				url: 'https://github.com/mar-alv',
				description: '🚀 Desenvolvedor Front-end @Terra via CWI, criando ótimas experiências de finalização de compras no time Digital Smart Sales',
				nickname: 'mar-alv',
				company: 'CWI Software',
				followers: 2
			}
		}
  }
}
