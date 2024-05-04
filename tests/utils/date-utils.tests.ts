import { dateUtils } from '@utils'

describe('date utils tests', () => {
  describe('toDaysSinceIssueWasPublished', () => {
    it('should return "Há pouco" when less than an hour has passed', () => {
      // arrange
      const now = new Date()
      const pastDate = new Date(now)
      pastDate.setMinutes(now.getMinutes() - 30)

      // act
      const result = dateUtils.toDaysSinceIssueWasPublished(pastDate.toISOString())

      // assert
      expect(result).toBe('Há pouco')
    })

    it('should return "Há X horas" when between 1 and 23 hours have passed', () => {
      // arrange
      const now = new Date()
      const pastDate = new Date(now)
      pastDate.setHours(now.getHours() - 10)

      // act
      const result = dateUtils.toDaysSinceIssueWasPublished(pastDate.toISOString())

      // assert
      expect(result).toBe('Há 10 horas')
    })

    it('should return "Há X dias" when more than 23 hours have passed', () => {
      // arrange
      const now = new Date()
      const pastDate = new Date(now)
      pastDate.setDate(now.getDate() - 2)

      // act
      const result = dateUtils.toDaysSinceIssueWasPublished(pastDate.toISOString())

      // assert
      expect(result).toBe('Há 2 dias')
    })
  })

  describe('getTimeDifferenceInMilliseconds', () => {
    it('should return the correct time difference in milliseconds', () => {
      // arrange
      const date1 = new Date('2024-05-04T12:00:00Z')
      const date2 = new Date('2024-05-04T10:00:00Z')

      // act
      const result = dateUtils.getTimeDifferenceInMilliseconds(date1, date2)

      // assert
      expect(result).toBe(7200000)
    })
  })

  describe('getDaysPassed', () => {
    it('should return the correct number of days passed', () => {
      // arrange
      const milliseconds = 3 * 24 * 60 * 60 * 1000

      // act
      const result = dateUtils.getDaysPassed(milliseconds)

      // assert
      expect(result).toBe(3)
    })
  })

  describe('getHoursPassed', () => {
    it('should return the correct number of hours passed', () => {
      // arrange
      const milliseconds = 3 * 60 * 60 * 1000

      // act
      const result = dateUtils.getHoursPassed(milliseconds)

      // assert
      expect(result).toBe(3)
    })
  })
})
