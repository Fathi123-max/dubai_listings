// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // General
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'class-methods-use-this': 'off',
    'no-param-reassign': ['error', { props: false }],
    'consistent-return': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // Import
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
          '**/test/**/*.js',
          '**/tests/**/*.js',
          '**/__mocks__/**/*.js',
          '**/__tests__/**/*.js',
          '**/test-utils/**/*.js',
          '**/jest.config.js',
          '**/jest.setup.js',
          '**/webpack.config.js',
          '**/webpack.*.js',
          '**/setupTests.js',
          '**/scripts/**/*.js',
        ],
      },
    ],

    // Prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        tabWidth: 2,
        semi: true,
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    '.next/',
    '.vscode/',
    '*.config.js',
    '.eslintrc.js',
    'jest.setup.js',
  ],
};
