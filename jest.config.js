module.exports = {
	testMatch: [
        '<rootDir>/src/**/*.test.tsx'
    ],
	collectCoverage: false,
	collectCoverageFrom: ['<rootDir>/src/components/**/!(index)*.(ts|tsx)'],
	coverageThreshold: {
		global: {
			statements: 80,
			branches: 60,
			functions: 80,
			lines: 80
		}
	},
	modulePaths: ['src'],
	preset: 'ts-jest/presets/js-with-ts',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/config/jest/fileMock.ts',
		'\\.(svg)$': '<rootDir>/config/jest/assetsTransformer.ts',
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', './config/jest/setupTests.tsx', './config/jest/localStorageMock.ts'],
	resetMocks: true,
	globals: {
		window: {},
		'ts-jest': {
			isolatedModules: true
		}
	},
	transform: {
	  '^.+\\.tsx$': 'ts-jest'
	}
};
