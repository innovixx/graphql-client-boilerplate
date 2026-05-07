import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
	schema: `${process.env.VITE_APP_API}`,
	documents: './src/graphql/**/*.graphql',
	generates: {
		'src/graphql/generated/': {
			preset: 'client',
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
		'src/graphql/generated/schema.graphql': {
			plugins: [
				'schema-ast',
			],
		},
	},
	overwrite: true,
};

export default config;
