import { z, defineCollection } from 'astro:content';

const perpetratorsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		agent: z.enum([
			'Astra',
			'Breach',
			'Brimstone',
			'Chamber',
			'Cypher',
			'Deadlock',
			'Fade',
			'Gekko',
			'Harbor',
			'Iso',
			'Jett',
			'KAY/O',
			'Killjoy',
			'Neon',
			'Omen',
			'Phoenix',
			'Raze',
			'Reyna',
			'Sage',
			'Skye',
			'Sova',
			'Viper',
			'Yoru',
		]),
		date: z.date().default(() => new Date()),
		map: z
			.enum(['Ascent', 'Bind', 'Breeze', 'Fracture', 'Haven', 'Icebox', 'Lotus', 'Pearl', 'Split', 'Sunset'])
			.default('Ascent'),
		name: z.string(),
		tag: z.string().max(5),
		rank: z
			.custom<`${'Iron' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Ascendant' | 'Immortal'} ${
				| '1'
				| '2'
				| '3'}`>((val) => {
				return (
					typeof val === 'string' &&
					/^(Iron|Bronze|Silver|Gold|Platinum|Diamond|Ascendant|Immortal) (1|2|3)$/.test(val)
				);
			})
			.or(z.enum(['Radiant', 'Unranked']))
			.default('Unranked'),
		result: z.enum(['Lost', 'Won']).default('Lost'),
		team: z.enum(['Enemy', 'Ally']).default('Ally'),
	}),
});

export const collections = {
	perpetrators: perpetratorsCollection,
};
