/* eslint-disable import/no-unresolved */
import baseConfig from '@innovixx/eslint-config/config/configs/base/index.mjs';
import reactConfig from '@innovixx/eslint-config/config/configs/react/index.mjs';
import typescriptConfig from '@innovixx/eslint-config/config/configs/typescript/index.mjs';
import graphqlPlugin from '@graphql-eslint/eslint-plugin';

export default [
	baseConfig,
	reactConfig,
	{
		...typescriptConfig,
		files: ['**/*.{ts,tsx}'],
	},
	{
		ignores: [
			'src/graphql/generated/**/*',
		],
	},
	{
		files: ['eslint.config.mjs'],
		languageOptions: {
			parserOptions: {
				project: null,
			},
		},
	},
	{
		files: ['graphql.config.ts'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.graphql.json',
			},
		},
	},
	{
		files: ['codegen.ts'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.codegen.json',
			},
		},
	},
	{
		files: ['**/*.graphql'],
		languageOptions: {
			parser: graphqlPlugin.parser,
		},
		ignores: ['**/node_modules/**', 'src/graphql/schema.graphql'],
		plugins: {
			'@graphql-eslint': graphqlPlugin,
		},
		rules: {
			'eol-last': 'warn',
			'@graphql-eslint/no-anonymous-operations': 'warn',
			'@graphql-eslint/no-duplicate-fields': 'warn',
			'@graphql-eslint/naming-convention': [
				'warn',
				{
					OperationDefinition: {
						style: 'PascalCase',
						forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
						forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
					},
					ObjectTypeDefinition: {
						style: 'PascalCase',
					},
				},
			],
		},
	},
];
