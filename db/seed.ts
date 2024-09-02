import { getCollection } from 'astro:content';
import { db, Clients, Posts } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	
	await db.insert(Clients).values([
		{ id: 1, name: "Iván", age: 40, isActive: true },
		{ id: 2, name: "Rosa", age: 37, isActive: true },
		{ id: 3, name: "Pablo", age: 4, isActive: true },
		{ id: 4, name: "Miguel", age: 1, isActive: false },
	  ]);

	  const posts = await getCollection("blog");

	  await db.insert(Posts).values(
		posts.map( (p: { id: any; data: { title: any; }; }) => ({
			id: p.id,
			title: p.data.title,
			likes: Math.round((Math.random() * 100))
		}))
	  )


	console.log('Seed executed');
}
