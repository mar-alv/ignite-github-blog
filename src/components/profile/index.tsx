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
import { useContext } from 'react'
import { UserContext } from '@contexts'

export function Profile() {
  const { user } = useContext(UserContext)

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
