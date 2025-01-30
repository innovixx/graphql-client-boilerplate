import path from 'node:path';
import { fileURLToPath } from 'node:url';
// eslint-disable-next-line import/no-extraneous-dependencies
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends(
    '@innovixx',
  ),
  {
    ignores: [
      'src/graphql/generated/schema.ts',
    ],
  },
];
