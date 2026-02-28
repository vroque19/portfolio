<script>
  let { form } = $props();
</script>

<div class="min-h-screen flex items-center justify-center">
  <div class="card w-96 bg-base-200 shadow-xl">
    <div class="card-body">
      <h2 class="card-title justify-center">Admin Login</h2>

      <form method="POST" class="flex flex-col gap-4">
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          class="input input-bordered w-full"
          required
        />

        {#if form?.error}
          <p class="text-error text-sm">{form.error}</p>
        {/if}

        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</div>
