import { ComponentProps } from 'react'
import { StyledInput } from './styles'
import { UseFormRegister } from 'react-hook-form'

interface Props extends ComponentProps<'input'> {
	register: UseFormRegister<any>
}

export function Input({ register, ...props }: Props) {
  return (
		<StyledInput
			className='text-m'
			placeholder={props.placeholder}
			tabIndex={2}
			type='text'
			{...register(props.name!)}
			{...props}
		/>
  )
}
