module.exports = {
	preset: 'ts-jest',
	roots: ['<rootDir>/tests'],
	testEnvironment: 'jsdom',
	testMatch: ['**/*.tests.tsx'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/.tests/styleMock.js',
		'\\.(gif|png|jpg|ttf|eot|svg)$': '<rootDir>/.tests/fileMock.js',
    '^@components(.*)': '<rootDir>/src/components$1',
    '^@contexts(.*)': '<rootDir>/src/contexts$1',
    '^@interfaces(.*)': '<rootDir>/src/interfaces$1',
    '^@libs(.*)': '<rootDir>/src/libs$1',
    '^@mappers(.*)': '<rootDir>/src/mappers$1',
    '^@pages(.*)': '<rootDir>/src/pages$1',
    '^@utils(.*)': '<rootDir>/src/utils$1',
		'react-markdown': '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
		'react-markdown': '<rootDir>/.tests/fileMock.js'
	}
}
