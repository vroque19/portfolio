<script>
  let { form } = $props();
</script>

<div class="max-w-3xl mx-auto px-6 py-10">
  <div class="flex justify-between items-center mb-8">
    <h1 class="text-3xl font-bold">Create Blog Post</h1>
    <form method="POST" action="?/logout">
      <button type="submit" class="btn btn-outline btn-sm">Logout</button>
    </form>
  </div>

  {#if form?.success}
    <div class="alert alert-success mb-6">
      Blog post created successfully!
    </div>
  {/if}

  {#if form?.error}
    <div class="alert alert-error mb-6">
      {form.error}
    </div>
  {/if}

  <form method="POST" action="?/create" class="flex flex-col gap-4">
    <div class="form-control">
      <label class="label" for="title">
        <span class="label-text">Title</span>
      </label>
      <input
        type="text"
        name="title"
        id="title"
        class="input input-bordered"
        required
      />
    </div>


    <div class="form-control">
      <label class="label" for="tag">
        <span class="label-text">Tag</span>
      </label>
      <input
        type="text"
        name="tag"
        id="tag"
        class="input input-bordered"
        required
      />
    </div>

    <div class="form-control">
      <label class="label" for="content">
        <span class="label-text">Content</span>
      </label>
      <textarea
        name="content"
        id="editor"
        placeholder="my thoughts on..."
        class="textarea textarea-bordered h-64"
        required
      ></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Create Post</button>
  </form>
</div>
