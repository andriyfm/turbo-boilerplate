const { theme } = require('../../packages/ui/tailwind.config')

module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
  },
  plugins: [],
}
