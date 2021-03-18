module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: 'airbnb-typescript-prettier',
  rules: {
    /* Check this rules */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    /* Check this rules */
    '@typescript-eslint/no-empty-function': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'react/jsx-props-no-spreading': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
