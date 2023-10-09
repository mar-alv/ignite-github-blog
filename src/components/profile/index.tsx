import { api } from '@libs'
import {
  ArrowUpRightFromSquareIcon,
  BuildingIcon,
  GitHubIcon,
  UserGroupIcon,
} from '@components'
import { IProfile, IProfileResponse } from '@interfaces'
import { ProfileHeader } from './styles'
import { useEffect, useState } from 'react'

export function Profile() {
  const [user, setUser] = useState<IProfile | null>(null)

  async function fetchUser() {
    const response = await api.get('/users/mar-alv')
    const data: IProfileResponse = response.data
    const {
      avatar_url: avatar,
      bio: description,
      company,
      followers,
      html_url: url,
      login: nickname,
      name,
    } = data

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
    <div>
      <img src={user.avatar} alt="Imagem de avatar do usuário" />
      <ProfileHeader>
        <h2>{user.name}</h2>
        <a href={user.url}>
          GITHUB <ArrowUpRightFromSquareIcon />
        </a>
      </ProfileHeader>
      <p>{user.bio}</p>
      <span>
        <GitHubIcon />
        {user.nickname}
        <BuildingIcon />
        {user.company}
        <UserGroupIcon />
        {user.followers}
      </span>
    </div>
  )
}
