import { c as create_ssr_component } from "../../chunks/ssr.js";
const app$1 = "";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="container-sm">${slots.default ? slots.default({}) : ``}</div></main>`;
});
export {
  Layout as default
};
