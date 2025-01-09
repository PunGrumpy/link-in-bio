import { FlatCompat } from '@eslint/eslintrc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwind from 'eslint-plugin-tailwindcss'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/classnames-order': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-no-comment-textnodes': 'off',
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  }
]

export default eslintConfig
