import { getAllBlogPosts } from "$lib/queries";

export async function load() {
  const { data } = await getAllBlogPosts();
  return { posts: data };
}