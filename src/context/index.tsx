import { arrayUtils, urlUtils } from '@utils'
import { gitHubService } from '@services'
import { Issue, Repo, User } from '@interfaces'
import {
	ReactNode,
	createContext,
	useState,
} from 'react'

interface ContextType {
  user: User | null
	filteredIssues: Issue[]
  issues: Issue[]
	repo: Repo | null
	repos: Repo[]
  getIssues(repo: string, search: string, userName: string): Promise<void>
	getRepos(userName: string): Promise<void>
  getUser(userName: string): Promise<void>
	selectRepo(selectedRepo: Repo): void
}

interface Props {
  children: ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({
  children
}: Props) => {
  const [issues, setIssues] = useState<Issue[]>([])
	const [repo, setRepo] = useState<Repo | null>(null)
	const [repos, setRepos] = useState<Repo[]>([])
  const [user, setUser] = useState<User | null>(null)

	async function getIssues(repo: string, search: string, userName: string) {
		const response = await gitHubService.getIssues(repo, search, userName)

    setIssues(response)
  }

	async function getRepos(userName: string) {
		const response = await gitHubService.getRepos(userName)

    setRepos(response)
		setRepo(response[0])
  }

  async function getUser(userName: string) {
		const response = await gitHubService.getUser(userName)

    setUser(response)
  }

	function selectRepo(selectedRepo: Repo) {
		setRepo(selectedRepo)
	}

	const filteredIssues = arrayUtils.filterIssuesBySearch(issues, urlUtils.getParam('search'))

	return (
    <Context.Provider
      value={{
				filteredIssues,
				issues,
				repo,
				repos,
				user,
				getIssues,
				getUser,
				getRepos,
				selectRepo
      }}
    >
      {children}
    </Context.Provider>
  )
}
