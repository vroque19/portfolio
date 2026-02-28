<script>
  let { data } = $props();
  let date = data.date_pub;
  function formatDate(currDate) {
    return new Date(currDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
  }
</script>

<article class="max-w-3xl mx-auto px-6 py-10">
  <header class="mb-8">
    <h1 class="text-4xl font-bold mb-4">{data.title}</h1>
    <div class="flex gap-4 text-sm text-gray-500">
      <span>{formatDate(data.date_pub)}</span>
      <span class="px-2 py-1 bg-gray-100 rounded">{data.tag}</span>
    </div>
  </header>

  <div class="prose prose-lg">
    {data.content}
  </div>
</article>