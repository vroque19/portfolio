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

<a href="/blog/{data.slug}" class="block bg-neutral-two text-neutral-700 p-2 w-96 shadow-sm hover:shadow-lg transition-shadow">
  <div class="card-body">
    <h2 class="card-title">{data.title}</h2>
    <p>{formatDate(data.date_pub)}</p>
    <div class="badge badge-md bg-primary-two p-3 mt-5">{data.tag}</div>
  </div>
</a>