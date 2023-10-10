import { IUser, IUserResponse } from '@interfaces'

export const profileMapper = {
  toDomain(userResponse: IUserResponse): IUser {
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
