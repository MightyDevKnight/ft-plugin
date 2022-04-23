import { getAssetPath } from '@stencil/core';
let registry = [
  {
    name: 'default',
    resolver: name => getAssetPath(`./icons/${name}.svg`)
  }
];
let watchedIcons = [];
export function watchSuxIcon(icon) {
  watchedIcons.push(icon);
}
export function unwatchSuxIcon(icon) {
  watchedIcons = watchedIcons.filter(el => el !== icon);
}
export function getLibrary(name) {
  return registry.filter(lib => lib.name === name)[0];
}
export function registerLibrary(name, resolver, mutator) {
  unregisterLibrary(name);
  registry.push({ name, resolver, mutator });
  // Redraw watched icons
  watchedIcons.map(icon => {
    if (icon.library === name) {
      icon.redraw();
    }
  });
}
export function unregisterLibrary(name) {
  registry = registry.filter(lib => lib.name !== name);
}