import { a as getAssetPath } from './index-9a7b8be0.js';

let registry = [
  {
    name: 'default',
    resolver: name => getAssetPath(`./icons/${name}.svg`)
  }
];
let watchedIcons = [];
function watchSuxIcon(icon) {
  watchedIcons.push(icon);
}
function unwatchSuxIcon(icon) {
  watchedIcons = watchedIcons.filter(el => el !== icon);
}
function getLibrary(name) {
  return registry.filter(lib => lib.name === name)[0];
}
function registerLibrary(name, resolver, mutator) {
  unregisterLibrary(name);
  registry.push({ name, resolver, mutator });
  // Redraw watched icons
  watchedIcons.map(icon => {
    if (icon.library === name) {
      icon.redraw();
    }
  });
}
function unregisterLibrary(name) {
  registry = registry.filter(lib => lib.name !== name);
}

export { unregisterLibrary as a, getLibrary as g, registerLibrary as r, unwatchSuxIcon as u, watchSuxIcon as w };
