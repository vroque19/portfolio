<script>
  import BlogEditor from '$lib/components/BlogEditor.svelte';

  let { data, form } = $props();
</script>

<div class="max-w-3xl mx-auto px-6 py-10">
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-3xl font-bold">Edit Draft</h1>
    <a href="/admin/drafts" class="btn btn-outline btn-sm">Back to Drafts</a>
  </div>

  <BlogEditor
    {form}
    initialTitle={data.post.title}
    initialTag={data.post.tag}
    initialContent={data.post.content}
  />
</div>
