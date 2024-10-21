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
        'component-navbar-background': '#1d1d1d',
        'bg-color': '#141414',
        'primary-color': '#1C5D99',
        'secondary-color': '#FFFFFF',
        'three-color': '#4EA699',
        'border-color': '#888888',
        //         /* CSS HEX */
        // --night: #141414ff;
        // --white: #ffffffff;
        // --lapis-lazuli: #1c5d99ff;
        // --keppel: #4ea699ff;
        // --emerald: #2dd881ff;
      },
      container: {
        center: true,
        padding: '',
      },
    },
  },
  plugins: [],
}
export default config
