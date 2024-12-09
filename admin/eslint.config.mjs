import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...Object.keys(globals.browser).reduce((acc, key) => {
          acc[key.trim()] = globals.browser[key];
          return acc;
        }, {}),
        ...Object.keys(globals.node).reduce((acc, key) => {
          acc[key.trim()] = globals.node[key];
          return acc;
        }, {}),
        ...Object.keys(globals.jest).reduce((acc, key) => {
          acc[key.trim()] = globals.jest[key];
          return acc;
        }, {}),
      },
    },
    plugins: {
      react,
      jest,
      import: eslintPluginImport,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['~app', path.resolve(__dirname, 'src/app')],
            ['~components', path.resolve(__dirname, 'src/components')],
            ['~features', path.resolve(__dirname, 'src/features')],
            ['~hooks', path.resolve(__dirname, 'src/hooks')],
            ['~pages', path.resolve(__dirname, 'src/pages')],
            ['~routes', path.resolve(__dirname, 'src/routes')],
            ['~services', path.resolve(__dirname, 'src/services')],
            ['~styles', path.resolve(__dirname, 'src/styles')],
            ['~utils', path.resolve(__dirname, 'src/utils')],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },

  {
    files: ['**/__tests__/**/*.{js,jsx}', '**/*.{spec,test}.{js,jsx}'],
    plugins: { jest },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
];
