import * as universal from '../entries/pages/paste/_id_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/paste/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/paste/[id]/+page.js";
export const imports = ["_app/immutable/nodes/3.fd0487c8.js","_app/immutable/chunks/firebase.c14d304d.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.afdc9194.js","_app/immutable/chunks/index.a17f34e5.js"];
export const stylesheets = [];
export const fonts = [];
