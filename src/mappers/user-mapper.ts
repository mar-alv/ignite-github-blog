import { User, UserDto } from '@interfaces'

export const userMapper = {
  toDomain(userResponse: UserDto): User {
    return {
      avatar: userResponse.avatar_url,
      name: userResponse.name,
      url: userResponse.html_url,
      description: userResponse.bio,
      nickname: userResponse.login,
      company: userResponse.company,
      followers: userResponse.followers,
    }
  },
}
