'use strict';

const index = require('./index-10f3b79d.js');

/*
 Stencil Client Patch Browser v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('substrate-ds.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["sux-text-area.cjs",[[1,"sux-text-area",{"placeholder":[1],"value":[1],"size":[1],"width":[1],"disabled":[4],"readonly":[4],"validIcon":[4,"valid-icon"],"helpText":[1,"help-text"],"label":[1],"labelPosition":[1,"label-position"],"required":[4],"errorText":[1,"error-text"],"error":[4]}]]],["sux-text-field.cjs",[[1,"sux-text-field",{"placeholder":[1],"value":[1],"size":[1],"width":[1],"disabled":[4],"readonly":[4],"validIcon":[4,"valid-icon"],"type":[1],"helpText":[1,"help-text"],"label":[1],"labelPosition":[1,"label-position"],"required":[4],"errorText":[1,"error-text"],"error":[4]}]]],["sux-checkbox.cjs",[[1,"sux-checkbox",{"label":[1],"name":[1],"checked":[4],"indeterminate":[4],"disabled":[4],"error":[4],"readonly":[4],"value":[1025],"helpText":[1,"help-text"]}]]],["sux-code.cjs",[[1,"sux-code",{"size":[513]}]]],["sux-detail.cjs",[[1,"sux-detail",{"size":[513],"classification":[513],"weight":[513]}]]],["sux-icon-library.cjs",[[1,"sux-icon-library",{"name":[1],"resolver":[16],"mutator":[16]}]]],["sux-link.cjs",[[1,"sux-link",{"variant":[513],"size":[513],"disabled":[516],"href":[513],"hasFocus":[32]}]]],["sux-menu-item.cjs",[[1,"sux-menu-item",{"value":[1],"active":[4],"disabled":[4],"selected":[4],"noWrap":[4,"no-wrap"]}]]],["sux-picker.cjs",[[1,"sux-picker",{"label":[1],"labelPosition":[1,"label-position"],"placeholder":[1],"value":[1],"width":[1],"quiet":[4],"required":[4],"error":[4],"disabled":[4],"readonly":[4],"helpText":[1,"help-text"]}]]],["sux-radio.cjs",[[1,"sux-radio",{"name":[1],"value":[1],"size":[1],"disabled":[4],"label":[1],"checked":[1540]}]]],["sux-radio-group.cjs",[[1,"sux-radio-group",{"label":[1],"invalid":[4],"name":[1],"value":[1544],"helpText":[1,"help-text"],"errorText":[1,"error-text"],"hasLabelSlot":[32]}]]],["sux-switch.cjs",[[1,"sux-switch",{"label":[1],"value":[1537],"checked":[1540],"disabled":[516],"name":[1],"hasLabelSlot":[32]}]]],["sux-actionable_9.cjs",[[1,"sux-avatar",{"imageUrl":[1,"image-url"],"size":[513],"initials":[1],"label":[1],"hasError":[32]}],[1,"sux-icon-button",{"name":[513],"variant":[513],"shape":[513],"size":[513],"quiet":[516],"disabled":[516],"library":[513],"src":[513],"label":[513],"href":[513],"target":[513]}],[1,"sux-actionable",{"href":[513],"role":[1],"target":[513]}],[1,"sux-body",{"size":[513],"classification":[513]}],[1,"sux-button",{"label":[513],"name":[513],"type":[1025],"variant":[513],"size":[513],"quiet":[516],"disabled":[516],"iconStart":[516,"icon-start"],"iconEnd":[4,"icon-end"],"isLoading":[516,"is-loading"]}],[1,"sux-heading",{"size":[513],"classification":[513],"weight":[513],"tag":[513]}],[1,"sux-responsive-media",{"aspectRatio":[1,"aspect-ratio"],"fit":[1]}],[1,"sux-tag",{"size":[1],"variant":[1],"status":[1],"hasPrefix":[4,"has-prefix"],"hasSuffix":[4,"has-suffix"]}],[1,"sux-icon",{"name":[1],"src":[1],"label":[1],"library":[1],"svg":[32],"redraw":[64]}]]],["sux-field-label_2.cjs",[[1,"sux-field-label",{"label":[1],"size":[1],"position":[1],"required":[4],"disabled":[4]}],[1,"sux-help-text",{"text":[1],"variant":[1],"size":[1],"icon":[4],"disabled":[4]}]]]], options);
});
