import * as universal from '../entries/pages/paste/_id_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/paste/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/paste/[id]/+page.js";
export const imports = ["_app/immutable/nodes/3.575de021.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f363f192.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.43bd9436.js","_app/immutable/chunks/index.6451611a.js","_app/immutable/chunks/index.dbaf3515.js"];
export const stylesheets = ["_app/immutable/assets/3.bd53154f.css","_app/immutable/assets/Indicator.be78b448.css"];
export const fonts = [];
