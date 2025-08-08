import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: './src/graphql/**/*.{graphql,gql}',
  generates: {
    'src/graphql/generated/schema.ts': {
      plugins: [
        'typescript-operations',
        'typescript',
        'typescript-react-apollo',
      ],
    },
  },
  overwrite: true,
  schema: 'http://localhost:9000/api',
};

export default config;
