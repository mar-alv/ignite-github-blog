import { Logo } from '@components'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => <Logo />,
} satisfies Meta<typeof Logo>

export default meta

export const Default: StoryObj = {}
