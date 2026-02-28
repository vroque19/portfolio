import { getBlogPost } from "$lib/queries";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const { data, error: dbError } = await getBlogPost(params.slug);

  if (dbError) {
    throw error(404, "Blog post not found");
  }

  return { post: data };
}