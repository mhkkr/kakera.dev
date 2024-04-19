/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,json,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      fontFamily: {
        // sans: ['Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif']
      }
    }
	},
	plugins: []
}
