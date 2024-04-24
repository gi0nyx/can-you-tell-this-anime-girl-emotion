

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.AsnrLXWh.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.BCrNhwFU.js"];
export const stylesheets = ["_app/immutable/assets/2.Dbxd9vll.css"];
export const fonts = [];
