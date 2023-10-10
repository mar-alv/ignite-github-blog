import { api } from '@libs'
import {
  ArrowUpRightFromSquareIcon,
  BuildingIcon,
  GitHubIcon,
  UserGroupIcon,
} from '@components'
import { IUser } from '@interfaces'
import {
  ProfileAbout,
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
} from './styles'
import { profileMapper } from '@mappers'
import { useEffect, useState } from 'react'

export function Profile() {
  const [user, setUser] = useState<IUser | null>(null)

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
          <p>
            <GitHubIcon />
            {user.nickname}
          </p>

          <p>
            <BuildingIcon />
            {user.company}
          </p>

          <p>
            <UserGroupIcon />
            {user.followers} seguidores
          </p>
        </ProfileInfo>
      </ProfileAbout>
    </ProfileContainer>
  )
}
