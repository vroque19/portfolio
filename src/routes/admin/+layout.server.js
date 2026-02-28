import { redirect } from "@sveltejs/kit";

export function load({ cookies, url }) {
  const isAuthenticated = cookies.get("admin_auth") === "true";
  const isLoginPage = url.pathname === "/admin/login";

  if (!isAuthenticated && !isLoginPage) {
    throw redirect(303, "/admin/login");
  }

  if (isAuthenticated && isLoginPage) {
    throw redirect(303, "/admin");
  }

  return { isAuthenticated };
}
