module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [],
  extends: [

  ],
  root: true,
  env: {

  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {

  },
};
