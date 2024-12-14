import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{ts}'], // Specify .ts files directly
    languageOptions: {
      globals: {
        ...globals.browser, // Retain existing browser globals
        process: 'readonly', // Add 'process' as a global variable
      },
    },
    plugins: {
      prettier: prettierPlugin, // Add Prettier plugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error', // TS-aware version
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      ...prettierPlugin.configs.recommended.rules, // Apply Prettier's recommended rules
      'prettier/prettier': 'error', // Report Prettier issues as errors
    },

    ignores: ['node_modules/*', 'dist/*', '*.min.js', 'coverage/*'],
  },
  prettierConfig,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
