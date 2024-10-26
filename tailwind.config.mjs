/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		container: {
      // you can configure the container to be centered
      center: true,

      // default breakpoints but with 40px removed
      screens: {
        sm: '100%',
        md: '700px',
        lg: '800px',
        xl: '1024px',
        '2xl': '1300px',
      },
    },
	},
	plugins: [],
}
