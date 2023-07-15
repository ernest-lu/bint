import { g as get_document } from "../../../../chunks/firebase.js";
import { e as error } from "../../../../chunks/index.js";
async function load({ params }) {
  const resp = await get_document(params.id);
  if (resp.message !== "success") {
    throw error(404);
  }
  const content = resp.content;
  return {
    content
  };
}
export {
  load
};
