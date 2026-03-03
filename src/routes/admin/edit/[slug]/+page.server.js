import { fail, redirect } from "@sveltejs/kit";
import { updateBlogPost } from "$lib/queries";

export const actions = {
  saveDraft: async ({ request, params }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const tag = formData.get("tag");
    const content = formData.get("content");

    const { error } = await updateBlogPost(params.slug, { title, tag, content, published: false });

    if (error) {
      return fail(500, { error: error.message });
    }
    throw redirect(303, "/admin/drafts");
  },

  publish: async ({ request, params }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const tag = formData.get("tag");
    const content = formData.get("content");

    const { error } = await updateBlogPost(params.slug, { title, tag, content, published: true });

    if (error) {
      return fail(500, { error: error.message });
    }

    throw redirect(303, "/blog");
  }
};
