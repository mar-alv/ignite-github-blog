import { api } from '@libs'
import {
  ArrowUpRightFromSquareIcon,
  BuildingIcon,
  GitHubIcon,
  UserGroupIcon,
} from '@components'
import {
  ProfileAbout,
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
} from './styles'
import { profileMapper } from '@mappers'
import { User } from '@interfaces'
import { useEffect, useState } from 'react'

export function UserProfile() {
  const [user, setUser] = useState<User | null>(null)

  async function getUser() {
    const response = await api.get('/users/mar-alv')

    setUser(profileMapper.toDomain(response.data))
  }

  useEffect(() => {
    getUser()
  }, [])

  if (!user) return <></>

  return (
    <ProfileContainer>
      <img src={user.avatar} alt="Imagem de avatar do usuário" />

      <ProfileAbout>
        <ProfileHeader>
          <h1>{user.name}</h1>
          <a href={user.url} target="_blank" rel="noreferrer">
            GITHUB <ArrowUpRightFromSquareIcon />
          </a>
        </ProfileHeader>

        <p>{user.description}</p>

        <ProfileInfo>
          <span>
            <GitHubIcon />
            {user.nickname}
          </span>

          <span>
            <BuildingIcon />
            {user.company}
          </span>

          <span>
            <UserGroupIcon />
            {user.followers} seguidores
          </span>
        </ProfileInfo>
      </ProfileAbout>
    </ProfileContainer>
  )
}
