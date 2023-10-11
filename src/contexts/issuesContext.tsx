import { api } from '@libs'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Issue } from '@interfaces'
import { issueMapper } from '@mappers'

interface IssuesContextType {
  issues: Issue[]
  getIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const getIssues = useCallback(async (query?: string) => {
    const q = `${query ?? ''} repo:mar-alv/ignite-github-blog`

    const response = await api.get('/search/issues', {
      params: {
        q,
      },
    })

    setIssues(issueMapper.toDomains(response.data))
  }, [])

  useEffect(() => {
    getIssues()
  }, [getIssues])

  return (
    <IssuesContext.Provider
      value={{
        getIssues,
        issues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
