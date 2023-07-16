

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d0b7b983.js","_app/immutable/chunks/scheduler.43bd9436.js","_app/immutable/chunks/index.6451611a.js","_app/immutable/chunks/singletons.7005e3a8.js","_app/immutable/chunks/index.dbaf3515.js"];
export const stylesheets = [];
export const fonts = [];
