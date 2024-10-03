const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
    'turbo'
  ],
  plugins: ['only-warn', 'tailwindcss', 'simple-import-sort'],
  globals: {
    React: true,
    JSX: true
  },
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    },
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.ts'
    }
  },
  rules: {
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off'
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/'
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ['*.js?(x)', '*.ts?(x)'] }
  ]
}
