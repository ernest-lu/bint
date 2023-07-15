

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.13bdf192.js","_app/immutable/chunks/scheduler.afdc9194.js","_app/immutable/chunks/index.a17f34e5.js","_app/immutable/chunks/firebase.c14d304d.js","_app/immutable/chunks/control.f5b05b5f.js"];
export const stylesheets = ["_app/immutable/assets/2.be78b448.css"];
export const fonts = [];
