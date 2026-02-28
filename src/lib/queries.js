import { supabase } from "$lib/supabaseClient";

export async function getBlogPost(slug) {
  const { data, error } = await supabase
    .from("blog post")
    .select("id, title, content, tag, date_pub")
    .eq("slug", slug)
    .single();
  return { data, error };
}

export async function getAllBlogPosts() {
  const { data, error } = await supabase
    .from("blog post")
    .select("id, title, tag, date_pub, slug")
    .order("date_pub", { ascending: false });
  return { data, error };
}
