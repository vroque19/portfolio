import { getAllDrafts } from "$lib/queries";

export async function load() {
  const { data: drafts } = await getAllDrafts();
  return { drafts };
}
