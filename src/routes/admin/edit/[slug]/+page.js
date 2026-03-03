import { getBlogPost } from "$lib/queries";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { data, error: dbError } = await getBlogPost(params.slug);

  if (dbError) {
    throw error(404, "Draft not found");
  }

  return { post: data, slug: params.slug };
}
