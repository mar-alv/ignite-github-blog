import { gitHubService } from '@services'
import { Issue, User } from '@interfaces'
import {
	ReactNode,
	createContext,
	useState,
} from 'react'

interface ContextType {
  user: User | null
  issues: Issue[]
  getIssues(userName: string, search: string, repo: string): Promise<void>
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

  return (
    <Context.Provider
      value={{
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
