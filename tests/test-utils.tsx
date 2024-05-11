import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Issue, Repo, User } from '@interfaces'
import { Context } from '@context'
import { ReactNode } from 'react'
import { render } from '@testing-library/react'

interface CustomValueProps {
	filteredIssues?: Issue[]
  issues?: Issue[]
	repo?: Repo | null
	repos?: Repo[]
  user?: User | null
  getIssues?(repo: string, search: string, userName: string): Promise<void>
	getRepos?(userName: string): Promise<void>
  getUser?(userName: string): Promise<void>
	selectRepo?(selectedRepo: Repo): void
}

const defaultValue = {
  user: null,
	filteredIssues: [],
  issues: [],
	repo: null,
	repos: [],
  getIssues(_repo: string, _search: string, _userName: string) {
		return Promise.resolve()
	},
	getRepos(_userName: string) {
		return Promise.resolve()
	},
  getUser(_userName: string) {
		return Promise.resolve()
	},
	selectRepo(_selectedRepo: Repo) {}
}

export function customRender(children: ReactNode, customValue = {} as CustomValueProps) {
  const { rerender } = render(
    <BrowserRouter>
			<Context.Provider
				value={{
					...defaultValue,
					...customValue
				}}
				>
				{children}
			</Context.Provider>
		</BrowserRouter>
  )

  return { rerender }
}

export function customRerender(rerender: (ui: ReactNode) => void, children: ReactNode, customValue = {} as CustomValueProps) {
  rerender(
    <BrowserRouter>
			<Context.Provider
				value={{
					...defaultValue,
					...customValue
				}}
				>
				{children}
			</Context.Provider>
		</BrowserRouter>
  )
}
