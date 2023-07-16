

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8d080601.js","_app/immutable/chunks/scheduler.43bd9436.js","_app/immutable/chunks/index.6451611a.js"];
export const stylesheets = ["_app/immutable/assets/0.d9a5a665.css"];
export const fonts = [];
