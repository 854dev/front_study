// 'use strict';

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es6: true,
//     node: true,
//     jest: true,
//   },
//   plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:prettier/recommended',
//   ],
//   settings: {
//     react: {
//       version: 'detect',
//       fragment: 'Fragment',
//     },
//   },
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 8,
//     sourceType: 'module',
//   },

//   rules: {
//     'no-console': ['warn', { allow: ['warn', 'error'] }],
//     'brace-style': 'off',
//     'comma-dangle': ['error', 'always-multiline'],
//     'constructor-super': 'error',
//     'eol-last': 'off',
//     eqeqeq: ['error', 'smart'],
//     'guard-for-in': 'error',
//     'no-bitwise': 'error',
//     'no-caller': 'error',
//     'no-empty': [
//       'error',
//       {
//         allowEmptyCatch: true,
//       },
//     ],
//     'no-new-wrappers': 'error',
//     'no-throw-literal': 'error',
//     'no-var': 'error',
//     'object-shorthand': 'error',
//     'one-var': ['error', 'never'],
//     'prefer-const': 'error',
//     'no-constant-condition': [
//       'error',
//       {
//         checkLoops: false,
//       },
//     ],
//     'require-yield': 'off',

//     // react
//     'react/prop-types': 'off',
//     'react/jsx-tag-spacing': 'error',
//     'react/self-closing-comp': 'error',
//     'react/function-component-definition': [
//       'error',
//       {
//         namedComponents: 'arrow-function',
//         unnamedComponents: 'arrow-function',
//       },
//     ],
//     'react/jsx-curly-brace-presence': ['error', 'never'],
//     'react/react-in-jsx-scope': 'off',

//     // react-hooks
//     'react-hooks/exhaustive-deps': 'off',
//     'react-hooks/rules-of-hooks': 'error',

//     // @typescript-eslint
//     semi: 'off',
//     '@typescript-eslint/semi': [
//       'error',
//       'always',
//       {
//         omitLastInOneLineBlock: false,
//       },
//     ],
//     'no-extra-semi': 'off',
//     '@typescript-eslint/no-extra-semi': 'error',
//     'no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': [
//       'error',
//       {
//         argsIgnorePattern: '^_',
//         ignoreRestSiblings: true,
//       },
//     ],
//     '@typescript-eslint/consistent-type-assertions': 'error',
//     '@typescript-eslint/no-misused-new': 'error',
//     '@typescript-eslint/no-require-imports': 'error',
//     '@typescript-eslint/prefer-for-of': 'error',
//     '@typescript-eslint/prefer-function-type': 'error',
//     '@typescript-eslint/no-empty-interface': 'off',
//     '@typescript-eslint/no-inferrable-types': 'off',
//     '@typescript-eslint/member-delimiter-style': 'error',
//     'no-shadow': 'off',
//     '@typescript-eslint/no-shadow': ['error'],
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/naming-convention': [
//       'error',
//       {
//         selector: 'parameter',
//         format: ['camelCase', 'PascalCase'],
//         leadingUnderscore: 'allow',
//       },
//       {
//         selector: 'classMethod',
//         format: ['camelCase'],
//         leadingUnderscore: 'forbid',
//       },
//       {
//         selector: 'typeLike',
//         format: ['PascalCase'],
//       },
//     ],
//     '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
//   },
// };
