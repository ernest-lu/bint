import { get_document } from "../../../firebase.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const resp = await get_document({ id: params.id });
  const data = resp.data;

  if (data.message !== "success") {
    throw error(404);
  }

  const content = data.content;

  return {
    content,
  };
}
