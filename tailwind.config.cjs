/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: 
		{
			colors:
			{
				otherPurple: '#3f145c',
			}
		},
	},
	plugins: [],
}
