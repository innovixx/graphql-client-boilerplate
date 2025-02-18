<<<<<<< HEAD
/** @typedef {import('eslint').Linter.Config} Config */

=======
>>>>>>> cc44518 (chore: update eslint config to v3.0.5)
import baseConfig from '@innovixx/eslint-config/config/configs/base/index.mjs';
import reactConfig from '@innovixx/eslint-config/config/configs/react/index.mjs';
import typescriptConfig from '@innovixx/eslint-config/config/configs/typescript/index.mjs';

<<<<<<< HEAD
export const defaultESLintIgnores = [
  '**/.*',
  '**/.git',
  '**/README.md',
  '**/dist/',
  '**/build/',
  '**/node_modules/',
  '**/temp/',
];

/** @type {Config[]} */
export const rootEslintConfig = [
=======
export default [
>>>>>>> cc44518 (chore: update eslint config to v3.0.5)
  baseConfig,
  reactConfig,
  typescriptConfig,
  {
    ignores: [
<<<<<<< HEAD
      ...defaultESLintIgnores,
      'src/graphql/generated/schema.ts',
      'vite.config.mjs',
=======
      'src/graphql/generated/*',
>>>>>>> cc44518 (chore: update eslint config to v3.0.5)
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
<<<<<<< HEAD
  {
    rules: {
      'react/require-default-props': 0,
    },
  },
];

export default [
  ...rootEslintConfig,
];
=======
];
>>>>>>> cc44518 (chore: update eslint config to v3.0.5)
