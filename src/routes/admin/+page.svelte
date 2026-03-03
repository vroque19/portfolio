<script>
  import BlogEditor from '$lib/components/BlogEditor.svelte';

  let { form } = $props();
</script>

<div class="max-w-3xl mx-auto px-6 py-10">
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-3xl font-bold">Create Blog Post</h1>
    <form method="POST" action="?/logout">
      <button type="submit" class="btn btn-outline btn-sm">Logout</button>
    </form>
  </div>

  <BlogEditor {form} />
</div>
