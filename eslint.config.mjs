/** @typedef {import('eslint').Linter.Config} Config */

import baseConfig from '@innovixx/eslint-config/config/configs/base/index.mjs';
import reactConfig from '@innovixx/eslint-config/config/configs/react/index.mjs';
import typescriptConfig from '@innovixx/eslint-config/config/configs/typescript/index.mjs';

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
  baseConfig,
  reactConfig,
  typescriptConfig,
  {
    ignores: [
      ...defaultESLintIgnores,
      'src/graphql/generated/schema.ts',
      'vite.config.mjs',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  {
    rules: {
      'react/require-default-props': 0,
    },
  },
];

export default [
  ...rootEslintConfig,
];
