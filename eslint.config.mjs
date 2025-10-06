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
			'src/graphql/generated',
			'codegen.ts',
			'graphql.config.ts',
			'schema.graphql',

		],
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
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
			'@graphql-eslint/no-anonymous-operations': 'error',
			'@graphql-eslint/naming-convention': [
				'error',
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
