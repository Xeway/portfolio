import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number(),
	}),
});

export const collections = {
	post: postCollection,
};
