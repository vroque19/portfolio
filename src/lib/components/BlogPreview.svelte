<script>
  let { data } = $props();
</script>

<div class="card bg-neutral-two text-neutral-700 p-2 w-96 shadow-sm">
  <div class="card-body">
    <h2 class="card-title">{data.title}</h2>
    <p>{data.tag} - {data.date_pub}</p>
  </div>
  <div class="card-actions justify-end">
    <a href="/blog/{data.slug}" class="btn bg-neutral-one">Read -></a>
  </div>
</div>