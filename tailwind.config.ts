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
        primary: '#0066FF',
        secondary: '#1a1a2e',
        accent: '#00d4ff',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0066FF 0%, #00d4ff 100%)',
      },
    },
  },
  plugins: [],
}
export default config
