import { Issue, IssueDto, IssueUserDto, IssuesDto } from '@interfaces'

const createdAt = new Date().toISOString()

export const issue: Issue = {
	id: 0,
	commentsCount: 1,
	createdAt,
	creatorNickname: 'mar-alv',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	title: 'Test Issue',
	url: 'https://github.com/example/repo/issues/1',
}

export const issueUserDto: IssueUserDto = {
	login: 'mar-alv',
}

export const issueDto: IssueDto = {
	number: 0,
	comments: 1,
	title: 'Test Issue',
	html_url: 'https://github.com/example/repo/issues/1',
	body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	created_at: createdAt,
	user: issueUserDto,
}

export const issuesDto: IssuesDto = {
	items: [issueDto],
}
