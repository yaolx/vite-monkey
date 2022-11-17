module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/recommended'],
  parser: '@typescript-eslint/parser', // 解析器，本解析器支持Ts
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 12, // 指定es版本
    sourceType: 'module' // 代码支持es6，使用module
  },
  rules: {
    camelcase: 'warn',
    'no-var': 'error',
    'no-undef': 0,
    'no-unused-vars': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/indent': ['error', 2],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        warnOnUnassignedImports: false
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
}
