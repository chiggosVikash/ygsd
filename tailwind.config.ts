import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        // primary:"#9D04FB", 
        primary:'#684DF4',
        secondary:'#2A3894',
        tertiary:'#e1eaff',
        darkcolor:'#080E1C',
        surface:'#eeeff1',
        onSurface:'141d38'

      },
      keyframes: {
        'float-slow': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'ripple': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(8)',
            opacity: '0',
          },
        },
      },
      animation: {
        'float-slow': 'float-slow 3s ease-in-out infinite',
        'float-slow-delay-1': 'float-slow 3s ease-in-out 1s infinite',
        'float-slow-delay-2': 'float-slow 3s ease-in-out 2s infinite',
        'float-slow-delay-3': 'float-slow 3s ease-in-out 3s infinite',
        'bounce-slow': 'bounce-slow 3s infinite',
        'ripple': 'ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
