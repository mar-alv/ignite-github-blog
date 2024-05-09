import { comment, commentDto } from '@mocks'
import { CommentDto } from '@interfaces'
import { commentsMapper } from '@mappers'

describe('commentsMapper', () => {
  describe('toDomain', () => {
    it('should correctly map CommentDto to Comment', () => {
      // arrange
      const commentsDto = [commentDto]
      const expectedComment = { ...comment };

      // act
      const comments = commentsMapper.toDomain(commentsDto)

      // assert
      expect(comments.length).toBe(1)
      expect(comments[0]).toEqual(expectedComment)
    })

    it('should filter out comments without body', () => {
      // arrange
      const commentsDto = [{ ...commentDto, body: '' }]

      // act
      const comments = commentsMapper.toDomain(commentsDto)

      // assert
      expect(comments.length).toBe(0)
    })

    it('should sort comments by created_at date', () => {
      // arrange
      const commentsDto: CommentDto[] = [
				{ ...commentDto, created_at: '2024-05-07T12:00:00Z' },
			  { ...commentDto, created_at: '2024-05-08T12:00:00Z' }
			]
			const expectedComments = [
				{ ...comment, createdAt: '2024-05-07T12:00:00Z' },
				{ ...comment, createdAt: '2024-05-08T12:00:00Z' }
			]

      // act
      const comments = commentsMapper.toDomain(commentsDto)

      // assert
      expect(comments.length).toBe(2)
      expect(comments[0]).toEqual(expectedComments[0])
      expect(comments[1]).toEqual(expectedComments[1])
    })
  })
})
