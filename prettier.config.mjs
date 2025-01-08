/**
 * @type {import('prettier').Config}
 */
const config = {
  semi: false,
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  importOrder: ['^react(.*)$', '^next(.*)$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}

export default config
