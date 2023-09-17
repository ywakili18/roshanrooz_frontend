import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        // Background colors
        background: '#F4F3EE', // Off white

        // Primary colors
        primary: '#BC6C25', // Amber orange
        secondary: '#DDA15E', // Light orange

        // Text colors
        text: '#121212', // Black
        textAccent: '#606C38', // light green

        // Header and Navbar colors
        header: '#283618', // Forest green
        navLink: '#283618', // Forest green (can be combined with header if they are identical)
        navbar: '#DDA15E', // Light orange

        // Footer colors
        footer: '#283618' // Forest green
      }
    }
  },
  plugins: []
}
export default config
