module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "max-len": ["error", { "code": 120 }],
    "require-jsdoc" : 0,
    "operator-linebreak": ["error", "before"],
    "arrow-parens": ["error", "as-needed"],
    "one-var-declaration-per-line": ["error", "initializations"],
    "one-var": ["error", "consecutive"],
    "object-curly-spacing": ["error", "always"],
    "indent": [
      2,
      2,
      {
        "CallExpression": {
          "arguments": "first"
        }
      }
    ]
  },
}
