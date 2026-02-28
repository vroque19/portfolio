import { fail, redirect } from "@sveltejs/kit";
import { createBlogPost } from "$lib/queries";

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const slug = title.replaceAll(' ', '-').toLowerCase();
    const tag = formData.get("tag");
    const content = formData.get("content");

    const { error } = await createBlogPost({ title, slug, tag, content });

    if (error) {
      return fail(500, { error: error.message });
    }

    return { success: true };
  },

  logout: async ({ cookies }) => {
    cookies.delete("admin_auth", { path: "/" });
    throw redirect(303, "/admin/login");
  }
};
