// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro'],
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
	printWidth: 140,
	tabWidth: 4,
	trailingComma: 'all',
};
