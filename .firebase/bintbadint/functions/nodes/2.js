

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.046adc66.js","_app/immutable/chunks/scheduler.43bd9436.js","_app/immutable/chunks/index.6451611a.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.f363f192.js","_app/immutable/chunks/control.f5b05b5f.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.be78b448.css"];
export const fonts = [];
