<script>
  import { marked } from 'marked';
  import { uploadImage } from '$lib/queries';

  let { form } = $props();
  let showPreview = $state(false);
  let content = $state('');
  let uploading = $state(false);

  let htmlContent = $derived(marked(content || ''));

  async function handleImageUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    uploading = true;
    const { url, error } = await uploadImage(file);
    uploading = false;

    if (error) {
      alert('Failed to upload image: ' + error.message);
      return;
    }

    // Insert markdown image at cursor or end of content
    const imageMarkdown = `![${file.name}](${url})`;
    content += '\n' + imageMarkdown + '\n';

    // Reset the file input
    event.target.value = '';
  }
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
    <div class="form-control ">
      <label class="label" for="title">
        <span class="label-text">Title</span>
      </label>
      <input
        type="text"
        name="title"
        id="title"
        class="input input-bordered bg-secondary-mauve"
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
        class="input input-bordered bg-secondary-mauve"
        required
      />
    </div>
    <div class="form-control">
      <div class="flex justify-between items-center">
        <label class="label" for="content">
          <span class="label-text">{showPreview ? 'Preview' : 'Edit'}</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <span class="label-text">Preview</span>
          <input type="checkbox" class="toggle" bind:checked={showPreview} />
        </label>
      </div>

      {#if showPreview}
        <div class="prose prose-lg max-w-none border rounded-lg p-4 min-h-64 bg-secondary-mauve">
          {@html htmlContent}
        </div>
      {:else}
        <textarea
          name="content"
          id="editor"
          placeholder="My thoughts on..."
          class="textarea textarea-bordered h-64 bg-secondary-mauve placeholder:text-gray-700"
          bind:value={content}
          required
        ></textarea>
      {/if}
    </div>
<div class="form-control">
      <label class="label">
        <span class="label-text">Upload Image</span>
      </label>
      <input
        type="file"
        accept="image/*"
        class="file-input file-input-bordered file-input-sm"
        onchange={handleImageUpload}
        disabled={uploading}
      />
      {#if uploading}
        <span class="text-sm text-gray-500 mt-1">Uploading...</span>
      {/if}
    </div>

    <button type="submit" class="btn btn-primary">Create Post</button>
  </form>
</div>
