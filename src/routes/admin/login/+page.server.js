import { fail, redirect } from "@sveltejs/kit";
import { ADMIN_PASSWORD } from "$env/static/private";

export const actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const password = formData.get("password");

    if (password !== ADMIN_PASSWORD) {
      return fail(401, { error: "Invalid password" });
    }

    cookies.set("admin_auth", "true", {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 // 1 day
    });

    throw redirect(303, "/admin");
  }
};
