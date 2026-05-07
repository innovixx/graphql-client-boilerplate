import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
	documents: './src/graphql/**/*.{graphql,ts,tsx}',
	generates: {
		'src/graphql/generated/schema.ts': {
			plugins: [
				'typescript',
			],
		},
		'src/graphql/generated/client/': {
			preset: 'client',
			plugins: [],
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
		'src/graphql/generated/schema.graphql': {
			plugins: ['schema-ast'],
		},
	},
	config: {
		scalars: {
			Date: 'string',
			DateTime: 'string',
			JSON: 'any',
		},
	},
	overwrite: true,
	schema: `${process.env.VITE_APP_API}`,
};

export default config;
