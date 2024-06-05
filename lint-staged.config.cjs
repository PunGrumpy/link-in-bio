module.exports = {
  '**/*.(ts)': () => `yarn tsc --noEmit`,
  '**/*.(ts|js|cjs)': () => [`yarn run lint`, `yarn run prettier`]
}
