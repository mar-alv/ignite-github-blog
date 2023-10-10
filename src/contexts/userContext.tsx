import { api } from '@libs'
import { IUser } from '@interfaces'
import { profileMapper } from '@mappers'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface UserContextType {
  user: IUser | null
  getUser: () => Promise<void>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<IUser | null>(null)

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
