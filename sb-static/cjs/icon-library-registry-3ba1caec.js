'use strict';

const index = require('./index-10f3b79d.js');

let registry = [
  {
    name: 'default',
    resolver: name => index.getAssetPath(`./icons/${name}.svg`)
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

exports.getLibrary = getLibrary;
exports.registerLibrary = registerLibrary;
exports.unregisterLibrary = unregisterLibrary;
exports.unwatchSuxIcon = unwatchSuxIcon;
exports.watchSuxIcon = watchSuxIcon;
