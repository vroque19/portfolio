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

export async function createBlogPost({ title, slug, tag, content }) {
  const { data, error } = await supabase
    .from("blog post")
    .insert([{ title, slug, tag, content, date_pub: new Date().toISOString() }])
    .select();
  return { data, error };
}
