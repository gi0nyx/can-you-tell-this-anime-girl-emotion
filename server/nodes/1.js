

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DWmU4JKE.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.BCrNhwFU.js","_app/immutable/chunks/entry.DewaxQI2.js"];
export const stylesheets = [];
export const fonts = [];
