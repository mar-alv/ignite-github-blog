import { IssueUserDto } from './issue-user-dto'

export interface IssueDto {
  number: number
  title: string
  html_url: string
  body: string
  created_at: string
  user: IssueUserDto
  comments: number
}
