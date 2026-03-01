<script>
  import BlogPreview from "$lib/components/BlogPreview.svelte";
  let { data } = $props();
</script>

<h1>This is my blog page. Read about the things I like to do</h1>
<div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
    {#each data.posts as post}
    <BlogPreview data={post} />
    {/each}
  </div>
</div>