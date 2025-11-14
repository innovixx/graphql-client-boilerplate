import type { IGraphQLConfig } from '@graphql-eslint/eslint-plugin';

const config: IGraphQLConfig = {
	schema: 'src/graphql/generated/schema.graphql',
	documents: 'src/**/*.{graphql,js,ts,jsx,tsx}',
};

export default config;
