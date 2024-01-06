import { getCollection, getEntry } from 'astro:content';
const perps = await getCollection('perpetrators');
export const mostWanted = perps
	.filter(
		(x) =>
			(x.data.team === 'Enemy' && x.data.result === 'Lost') ||
			(x.data.team === 'Ally' && x.data.result === 'Won'),
	)
	.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const arrests = perps
	.filter(
		(x) =>
			(x.data.team === 'Enemy' && x.data.result === 'Won') ||
			(x.data.team === 'Ally' && x.data.result === 'Lost'),
	)
	.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
