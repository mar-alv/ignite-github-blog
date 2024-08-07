module.exports = {
	preset: 'ts-jest',
	roots: ['<rootDir>/tests'],
	testEnvironment: 'jsdom',
	testMatch: ['**/*.tests.ts', '**/*.tests.tsx'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/.tests/styleMock.js',
		'\\.(gif|png|jpg|ttf|eot|svg)$': '<rootDir>/.tests/fileMock.js',
    '^@components(.*)': '<rootDir>/src/components$1',
    '^@context(.*)': '<rootDir>/src/context$1',
    '^@interfaces(.*)': '<rootDir>/src/interfaces$1',
    '^@libs(.*)': '<rootDir>/src/libs$1',
    '^@mappers(.*)': '<rootDir>/src/mappers$1',
    '^@mocks(.*)': '<rootDir>/__mocks__$1',
    '^@pages(.*)': '<rootDir>/src/pages$1',
    '^@services(.*)': '<rootDir>/src/services$1',
    '^@utils(.*)': '<rootDir>/src/utils$1',
		'react-markdown': '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
		'react-markdown': '<rootDir>/.tests/fileMock.js'
	}
}
