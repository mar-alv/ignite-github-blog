import { BrowserRouter } from 'react-router-dom'
import { Context } from '@context'
import { Issue, Repo, User } from '@interfaces'
import { ReactNode } from 'react'

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
  getIssues(repo: string, search: string, userName: string) {
		return Promise.resolve()	
	},
	getRepos(userName: string) {
		return Promise.resolve()	
	},
  getUser(userName: string) {
		return Promise.resolve()
	},
	selectRepo(selectedRepo: Repo) {}
}

export function customRender(children: ReactNode, customValue = {} as CustomValueProps) {
	return (
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
