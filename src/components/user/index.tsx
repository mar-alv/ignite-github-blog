import {
  ArrowUpRightFromSquareIcon,
  BuildingIcon,
  GitHubIcon,
  UserGroupIcon,
} from '@components'
import { gitHubService } from '@services'
import {
	StyledDescription,
	StyledHeader,
	StyledInfo,
	StyledUser,
} from './styles'
import { useEffect, useState } from 'react'
import { User as IUser } from '@interfaces'

export function User() {
  const [user, setUser] = useState<IUser | null>(null)

	async function getUser() {
		const response = await gitHubService.getUser()

		setUser(response)
	}

  useEffect(() => {
		getUser()
  }, [])

  if (!user) return <></>

  return (
    <StyledUser>
      <img src={user.avatar} alt='Imagem de avatar do usuário' />

			<div>
				<StyledHeader>
					<h1 className='title-l'>
						{user.name}
					</h1>

					<a href={user.url} target='_blank' rel='noreferrer' tabIndex={1}>
						GITHUB <ArrowUpRightFromSquareIcon />
					</a>
				</StyledHeader>

				<StyledDescription className='text-m'>
					{user.description}
				</StyledDescription>

				<StyledInfo className='text-m'>
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
				</StyledInfo>
			</div>
    </StyledUser>
  )
}
