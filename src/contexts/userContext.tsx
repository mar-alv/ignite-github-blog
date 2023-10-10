import { api } from '@libs'
import { User } from '@interfaces'
import { profileMapper } from '@mappers'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface UserContextType {
  user: User | null
  getUser: () => Promise<void>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const getUser = useCallback(async () => {
    const response = await api.get('/users/mar-alv')

    setUser(profileMapper.toDomain(response.data))
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <UserContext.Provider
      value={{
        user,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
