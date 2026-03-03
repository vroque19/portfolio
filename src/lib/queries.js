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
    .eq("published", true)
    .order("date_pub", { ascending: false });
  return { data, error };
}

export async function createBlogPost({ title, slug, tag, content, published = false }) {
  const { data, error } = await supabase
    .from("blog post")
    .insert([{ title, slug, tag, content, published, date_pub: new Date().toISOString() }])
    .select();
  return { data, error };
}

export async function getAllDrafts() {
  const { data, error } = await supabase
    .from("blog post")
    .select("id, title, tag, date_pub, slug, published")
    .eq("published", false)
    .order("date_pub", { ascending: false });
  return { data, error };
}

export async function updateBlogPost(slug, { title, tag, content, published }) {
  const { data, error } = await supabase
    .from("blog post")
    .update({ title, tag, content, published })
    .eq("slug", slug)
    .select();
  return { data, error };
}

export async function getAllTags() {
  const { data, error } = await supabase
    .from("blog post")
    .select("tag")
    .eq("published", true);

  if (error) {
    return { data: [], error };
  }

  const uniqueTags = [...new Set(data.map((post) => post.tag))];
  const sanUniqueTags = uniqueTags.filter(tag => tag !== null);
  return { data: sanUniqueTags, error: null };
}

export async function uploadImage(file) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("blog-images")
    .upload(fileName, file);

  if (error) {
    return { url: null, error };
  }

  const { data: urlData } = supabase.storage
    .from("blog-images")
    .getPublicUrl(fileName);

  return { url: urlData.publicUrl, error: null };
}
