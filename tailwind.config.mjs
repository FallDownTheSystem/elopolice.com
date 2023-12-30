const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["'Public Sans Variable'", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			fontFamily: {
				display: ["'Teko Variable'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
