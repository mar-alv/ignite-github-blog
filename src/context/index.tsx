import { arrayUtils, urlUtils } from '@utils'
import { gitHubService } from '@services'
import { Issue, User } from '@interfaces'
import {
	ReactNode,
	createContext,
	useState,
} from 'react'

interface ContextType {
  user: User | null
	filteredIssues: Issue[]
  issues: Issue[]
  getIssues(repo: string, search: string, userName: string): Promise<void>
  getUser(userName: string): Promise<void>
}

interface Props {
  children: ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({
  children
}: Props) => {
  const [issues, setIssues] = useState<Issue[]>([])
  const [user, setUser] = useState<User | null>(null)

	async function getIssues(repo: string, search: string, userName: string) {
		const response = await gitHubService.getIssues(repo, search, userName)

    setIssues(response)
  }

  async function getUser(userName: string) {
		const response = await gitHubService.getUser(userName)

    setUser(response)
  }

	const filteredIssues = arrayUtils.filterIssuesBySearch(issues, urlUtils.getParam('search'))

	return (
    <Context.Provider
      value={{
				filteredIssues,
				issues,
				user,
				getIssues,
				getUser
      }}
    >
      {children}
    </Context.Provider>
  )
}
