import { user, userDto } from '@mocks'
import { userMapper } from '@mappers'

describe('userMapper', () => {
  describe('toDomain', () => {
    it('should correctly map a UserDto to a User', () => {
			// act
      const result = userMapper.toDomain(userDto)

			// assert
      expect(result).toEqual(user)
    })

    it('should preserve all properties of the user', () => {
			// act
      const result = userMapper.toDomain(userDto)

			// assert
      expect(result.avatar).toEqual(user.avatar)
      expect(result.name).toEqual(user.name)
      expect(result.url).toEqual(user.url)
      expect(result.description).toEqual(user.description)
      expect(result.nickname).toEqual(user.nickname)
      expect(result.company).toEqual(user.company)
      expect(result.followers).toEqual(user.followers)
    })
  })
})
