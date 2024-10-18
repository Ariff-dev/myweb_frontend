import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'component-navbar-background': '#4F4F4F',
        'primary-color': '#3d8fec',
        'secondary-color': '#5674FF',
        'border-color': '#5E5E5E',
      },
    },
  },
  plugins: [],
}
export default config
