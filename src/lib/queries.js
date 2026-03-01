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

export async function getAllTags() {
  const { data, error } = await supabase
    .from("blog post")
    .select("tag");

  if (error) {
    return { data: [], error };
  }

  const uniqueTags = [...new Set(data.map((post) => post.tag))];
  const sanUniqueTags = uniqueTags.filter(tag => tag !== null);
  console.log(sanUniqueTags);
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
