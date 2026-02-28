<script>
  let { data } = $props();
</script>

<div class="card bg-purple-400 p-2 w-96 shadow-sm">
  <div class="card-body">
    <h2 class="card-title">{data.title}</h2>
    <p>{data.tag} - {data.date_pub}</p>
    <div class="card-actions justify-end">
      <a href="/blog/{data.slug}" class="btn btn-primary">Read >></a>
    </div>
  </div>
</div>