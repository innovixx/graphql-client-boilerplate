import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: './src/graphql/**/*.graphql',
  generates: {
    'src/graphql/generated/schema.ts': {
      plugins: [
        'typescript-operations',
        'typescript',
        'typescript-react-apollo',
      ],
    },
    'src/graphql/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
  overwrite: true,
  schema: 'http://localhost:9000/api',
};

export default config;
