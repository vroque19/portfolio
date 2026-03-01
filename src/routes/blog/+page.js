import { getAllBlogPosts, getAllTags } from "$lib/queries";

export async function load() {
  const { data: posts } = await getAllBlogPosts();
  const { data: tags } = await getAllTags();
  return { posts, tags };
}