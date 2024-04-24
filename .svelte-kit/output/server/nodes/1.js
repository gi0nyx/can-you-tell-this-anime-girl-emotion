

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ng1jBC1m.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.BCrNhwFU.js","_app/immutable/chunks/entry.C8FiWBVJ.js"];
export const stylesheets = [];
export const fonts = [];
