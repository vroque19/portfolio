<script>
  let { data, index = 0 } = $props();

  function formatDate(currDate) {
    return new Date(currDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  // Vary padding based on index for masonry effect
  const sizeVariants = ['py-6', 'py-10', 'py-8', 'py-12', 'py-5'];
  const sizeClass = sizeVariants[index % sizeVariants.length];
</script>

<a
  href="/blog/{data.slug}"
  class="block bg-neutral-two text-neutral-700 px-4 {sizeClass} rounded-lg border-neutral-700 shadow-sm hover:shadow-xl transition-shadow break-inside-avoid"
>
  <div class="card-body">
    <h2 class="card-title text-xl font-bold">{data.title}</h2>
    <p class="text-sm mt-2">{formatDate(data.date_pub)}</p>
    <div class="badge badge-md bg-primary-two p-3 mt-4">{data.tag}</div>
  </div>
</a>