export function load({ cookies }) {
  const isAdmin = cookies.get("admin_auth") === "true";
  return { isAdmin };
}
