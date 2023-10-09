import { api } from '@libs'
import {
  ArrowUpRightFromSquareIcon,
  BuildingIcon,
  GitHubIcon,
  UserGroupIcon,
} from '@components'
import { User, UserResponse } from '@interfaces'
import {
  ProfileAbout,
  ProfileContainer,
  ProfileHeader,
  ProfileInfo,
} from './styles'
import { useEffect, useState } from 'react'

export function Profile() {
  const [user, setUser] = useState<User | null>(null)

  async function fetchUser() {
    const response = await api.get('/users/mar-alv')
    const data: UserResponse = response.data
    const {
      avatar_url: avatar,
      bio: description,
      company,
      followers,
      html_url: url,
      login: nickname,
      name,
    } = data

    console.log(data)

    setUser({
      avatar,
      description,
      company,
      followers,
      name,
      nickname,
      url,
    })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (!user) return <></>

  return (
    <ProfileContainer>
      <img src={user.avatar} alt="Imagem de avatar do usuário" />

      <ProfileAbout>
        <ProfileHeader>
          <h1>{user.name}</h1>
          <a href={user.url}>
            GITHUB <ArrowUpRightFromSquareIcon />
          </a>
        </ProfileHeader>

        <p>{user.description}</p>

        <ProfileInfo>
          <h2>
            <GitHubIcon />
            {user.nickname}
          </h2>

          <h2>
            <BuildingIcon />
            {user.company}
          </h2>

          <h2>
            <UserGroupIcon />
            {user.followers} seguidores
          </h2>
        </ProfileInfo>
      </ProfileAbout>
    </ProfileContainer>
  )
}
