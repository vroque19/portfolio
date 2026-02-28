<script>
  let { data } = $props();
</script>

<article class="max-w-3xl mx-auto px-6 py-10">
  <header class="mb-8">
    <h1 class="text-4xl font-bold mb-4">{data.title}</h1>
    <div class="flex gap-4 text-sm text-gray-500">
      <span>{data.date_pub}</span>
      <span class="px-2 py-1 bg-gray-100 rounded">{data.tag}</span>
    </div>
  </header>

  <div class="prose prose-lg">
    {data.content}
  </div>
</article>