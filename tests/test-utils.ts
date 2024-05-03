import { api } from '@libs'

export const testUtils = {
	mockGetIssues() {
		const response = {
			data: {
				items: [
					{
						number: 0,
						title: 'Issue-1',
						html_url: 'string',
						body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						created_at: 'string',
						user: {
							login: 'string'
						},
						comments: 0
					},
					{
						number: 1,
						title: 'Issue-2',
						html_url: 'string',
						body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						created_at: 'string',
						user: {
							login: 'string'
						},
						comments: 0
					},
				]
			}
		};

		(api.get as jest.Mock).mockResolvedValue(response);
	},
	mockGetUser() {
		const response = {
			data: {
				avatar_url: 'https://avatars.githubusercontent.com/u/101023750?v=4',
				name: 'Marcelo Alvarez',
				html_url: 'https://github.com/mar-alv',
				bio: '🚀 Desenvolvedor Front-end @Terra via CWI, criando ótimas experiências de finalização de compras no time Digital Smart Sales',
				login: 'mar-alv',
				company: 'CWI Software',
				followers: 2
			}
		};
	
		(api.get as jest.Mock).mockResolvedValue(response);
	}
}
