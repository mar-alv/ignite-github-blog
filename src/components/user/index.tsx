import {
  ArrowUpRightFromSquareIcon,
  BuildingIcon,
  GitHubIcon,
  UserGroupIcon,
} from '@components'
import { Context } from '@context'
import {
	StyledDescription,
	StyledHeader,
	StyledInfo,
	StyledUser,
} from './styles'
import { useContext } from 'react'

export function User() {
  const { user } = useContext(Context)

	const { avatar, company, description, followers, name, nickname, url } = user!

  return (
    <StyledUser>
      <img src={avatar} alt='Imagem de avatar do usuário' />

			<div>
				<StyledHeader>
					<h1 className='title-l'>
						{name}
					</h1>

					<a href={url} target='_blank' rel='noreferrer' tabIndex={1}>
						GITHUB <ArrowUpRightFromSquareIcon />
					</a>
				</StyledHeader>

				<StyledDescription className='text-m'>
					{description}
				</StyledDescription>

				<StyledInfo className='text-m'>
					<span>
						<GitHubIcon />
						{nickname}
					</span>

					<span>
						<BuildingIcon />
						{company}
					</span>

					<span>
						<UserGroupIcon />
						{followers} seguidores
					</span>
				</StyledInfo>
			</div>
    </StyledUser>
  )
}
