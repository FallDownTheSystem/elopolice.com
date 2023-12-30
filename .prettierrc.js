// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	pluginSearchDirs: false,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	useTabs: true,
	semi: true,
	singleQuote: true,
	printWidth: 120,
	tabWidth: 4,
	trailingComma: 'all',
};
