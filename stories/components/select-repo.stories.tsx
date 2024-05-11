import { customRender } from '../stories-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { repo, user } from '@mocks'
import { Repo } from '@interfaces'
import { SelectRepo } from '@components'
import { useArgs, } from '@storybook/preview-api'

const meta = {
  title: 'Select Repo',
  component: SelectRepo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: () => {
    const [{ selectedRepo }, updateArgs] = useArgs()

		return customRender(<SelectRepo />, {
			repo: selectedRepo,
			repos: [
				repo,
				{...repo, id: 2, name: 'ignite-coffee-delivery'}
			],
			user,
			async getRepos(userName: string) {
				return Promise.resolve()
			},
			selectRepo(newRepo: Repo) {
	      updateArgs({ selectedRepo: newRepo })
			}
		})
  }
} satisfies Meta<typeof SelectRepo>

export default meta

export const Default: StoryObj = {
	args: {
		selectedRepo: repo
	}
}
