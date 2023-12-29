import { defineConfig } from 'astro/config';
import iconsVitePlugin from 'unplugin-icons/vite';
import tailwindIntegration from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwindIntegration()],
	vite: {
		plugins: [
			iconsVitePlugin({
				compiler: 'astro',
			}),
		],
	},
});
