const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
    require.resolve('@vercel/style-guide/eslint/next'),
    'turbo'
  ],
  globals: {
    React: true,
    JSX: true
  },
  env: {
    node: true,
    browser: true
  },
  plugins: ['only-warn', 'tailwindcss', 'simple-import-sort'],
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
    'node_modules/'
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }]
}
