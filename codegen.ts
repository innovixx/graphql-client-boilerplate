import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
	generates: {
		'src/graphql/generated/': {
			documents: './src/graphql/**/*.graphql',
			preset: 'client',
			presetConfig: {
				gqlTagName: 'gql',
				fragmentMasking: false,
			},
			schema: `${process.env.VITE_APP_API}`,
			config: {
				scalars: {
					Date: 'string',
					JSON: 'any',
				},
			},
		},
		'src/graphql/generated/schema.ts': {
			plugins: ['typescript'],
			schema: `${process.env.VITE_APP_API}`,
			config: {
				scalars: {
					Date: 'string',
					JSON: 'any',
				},
			},
		},
		'src/graphql/generated/schema.graphql': {
			plugins: ['schema-ast'],
			schema: `${process.env.VITE_APP_API}`,
		},
	},
	overwrite: true,
};

export default config;
