<script>
  let { data } = $props();

  function formatDate(currDate) {
    return new Date(currDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
</script>

<div class="max-w-6xl mx-auto px-6 py-10">
  <header class="text-center mb-10">
    <h1 class="text-4xl font-bold mb-4">Drafts</h1>
    <p class="text-lg">Your unpublished blog posts</p>
  </header>

  {#if data.drafts && data.drafts.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      {#each data.drafts as draft}
        <a href="/admin/edit/{draft.slug}" class="block bg-neutral-two text-neutral-700 p-4 w-96 shadow-sm hover:shadow-lg transition-shadow rounded-lg">
          <div class="card-body">
            <h2 class="card-title text-xl font-bold">{draft.title}</h2>
            <p class="text-sm">{formatDate(draft.date_pub)}</p>
            {#if draft.tag}
              <div class="badge badge-md bg-primary-two p-3 mt-3">{draft.tag}</div>
            {/if}
            <p class="text-sm mt-3 text-gray-500">Click to edit</p>
          </div>
        </a>
      {/each}
    </div>
  {:else}
    <p class="text-center text-gray-500">No drafts yet.</p>
  {/if}
</div>
