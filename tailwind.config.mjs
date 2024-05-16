/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
	content: ['./src/**/*.{astro,html,js,json,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      textColor: {
        lighten: '#252525',
        darken: '#ffffff'
      },
      fontFamily: {
				'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
      },
      zIndex: {
        header: 100
      }
    }
	},
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-outline-white': {
          textShadow: `
            1px 1px 0 #fff,
            -1px 1px 0 #fff,
            1px -1px 0 #fff,
            -1px -1px 0 #fff
          `,
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ]
}
