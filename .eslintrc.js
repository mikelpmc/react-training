module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	extends: [
		'@beezyinc/eslint-config-beezy',
		'eslint-config-airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier'
	],
	parserOptions: {
		project: [__dirname + '/tsconfig.json']
	},
	overrides: [
		{
			files: ['**.tsx', '**.ts'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': ['warn', {
					allowDirectConstAssertionInArrowFunctions: true
				}],
				'jsx-a11y/label-has-for': 'off',
				"jsx-a11y/label-has-associated-control": ['warn', {}],
				'react/require-default-props': 'off'
			}
		},
		{
			files: ['*.style.tsx'],
			rules: {
				'import/prefer-default-export': 'off'
			}
		},
		{
			files: ['*.test.tsx'],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'off'
			}
		}
	],
	settings: {
		'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: __dirname + '/tsconfig.json'
			}
		}
	}
};
