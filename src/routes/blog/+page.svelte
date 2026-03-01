<script>
  import BlogPreview from "$lib/components/BlogPreview.svelte";
  let { data } = $props();
  let selectedTag = $state('');

  let filteredPosts = $derived(
    selectedTag
      ? data.posts.filter(post => post.tag === selectedTag)
      : data.posts
  );

  function clearFilter() {
    selectedTag = '';
  }
</script>

<div class="max-w-6xl mx-auto px-6 py-10">
  <header class="text-center mb-10">
    <h1 class="text-4xl font-bold mb-4">Blog</h1>
    <p class="text-lg">Read about the things I am interested in :)</p>
  </header>

  <div class="flex flex-wrap justify-center gap-2 mb-10">
    <button class="btn btn-square bg-amber-50 border-amber-50" type="button" onclick={clearFilter}>×</button>
    {#each data.tags as tag}
      <button
        class="btn bg-amber-50 border-amber-50"
        class:btn-active={selectedTag === tag}
        type="button"
        onclick={() => selectedTag = tag}
      >
        {tag}
      </button>
    {/each}
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
    {#each filteredPosts as post}
      <BlogPreview data={post} />
    {/each}
  </div>
</div>