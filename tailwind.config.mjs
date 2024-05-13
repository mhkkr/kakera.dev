/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,json,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      fontFamily: {
				roboto: ['Roboto', 'sans-serif']
      },
      zIndex: {
        header: 100
      }
    }
	},
	plugins: []
}
