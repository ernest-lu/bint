import { get_document } from "../../../firebase.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const resp = await get_document(params.id);

  if (resp.message !== "success") {
    throw error(404);
  }

  const content = resp.content;

  return {
    content,
  };
}
