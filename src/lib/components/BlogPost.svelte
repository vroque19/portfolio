<script>
  import { marked } from 'marked';

  let { data } = $props();

  function formatDate(currDate) {
    return new Date(currDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  const htmlContent = marked(data.content || '');
</script>

<article class="max-w-3xl mx-auto px-6 py-10">
  <header class="mb-8">
  <div class="flex">
    <h1 class="flex-auto text-4xl font-bold mb-4">{data.title}</h1>
<a href="/blog" class="btn btn-outline btn-sm justify-end">Back to Blog</a>
  </div>
    <div class="flex gap-4 text-sm">
      <span>{formatDate(data.date_pub)}</span>
      <!-- <span class="px-2 py-1  rounded text-secondary-dark_green">{data.tag}</span> -->
    </div>
  </header>

  <div class="prose prose-lg max-w-none text-gray-900 dark:text-neutral-one">
    {@html htmlContent}
  </div>
</article>