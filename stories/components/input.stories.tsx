import { Input } from '@components'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: ({...args}) => {
		const { register } = useForm()

		return (
			<Input
				name={args.name}
				placeholder={args.placeholder}
				register={register}
			/>
		)
  }
} satisfies Meta<typeof Input>

export default meta

export const Default: StoryObj = {
  args: {
		name: 'user',
		placeholder: 'Buscar usuário'
  }
}
