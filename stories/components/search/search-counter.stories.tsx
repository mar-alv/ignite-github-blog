import type { Meta, StoryObj } from '@storybook/react'
import { SearchCounter } from '@components'

const meta = {
  title: 'Search/Search Counter',
  component: SearchCounter,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: ({...args}) => {
		return (
			<SearchCounter
				counter={args.counter}
				counterPluralText={args.counterPluralText}
				counterSingularText={args.counterSingularText}
			/>
		)
  }
} satisfies Meta<typeof SearchCounter>

export default meta

export const Singular: StoryObj = {
	args: {
		counter: 1,
		counterPluralText: 'Publicações',
		counterSingularText: 'Publicação'
	}
}

export const Plural: StoryObj = {
	args: {
		counter: 2,
		counterPluralText: 'Publicações',
		counterSingularText: 'Publicação'
	}
}
