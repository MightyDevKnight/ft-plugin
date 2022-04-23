import { Component, Element, Event, Method, Prop, State, Watch, h } from '@stencil/core';
import { getLibrary, watchSuxIcon, unwatchSuxIcon } from '../sux-icon-library/icon-library-registry';
import { requestIcon } from './request';
const parser = new DOMParser();
/**
 * @part base - The component's base wrapper.
 */
export class Icon {
  constructor() {
    /** The name of a registered custom icon library. */
    this.library = 'default';
  }
  handleChange() {
    this.setIcon();
  }
  // If connected or icon available show that icon
  connectedCallback() {
    watchSuxIcon(this.host);
  }
  // if Icon is loaded Successfully
  componentDidLoad() {
    this.setIcon();
  }
  // if it is not connected the icon should not show.
  disconnectedCallback() {
    unwatchSuxIcon(this.host);
  }
  //--------------------------------------------------------------------------
  //
  //  Methods
  //
  //--------------------------------------------------------------------------
  /** @internal Fetches the icon and redraws it. Used to handle library registrations. */
  async redraw() {
    this.setIcon();
  }
  /** If the label is not provided, take the file name of the icon as the label */
  getLabel() {
    let label = '';
    if (this.label) {
      label = this.label;
    }
    else if (this.name) {
      label = this.name.replace(/-/g, ' ');
    }
    else if (this.src) {
      label = this.src.replace(/.*\//, '').replace(/-/g, ' ').replace(/\.svg/i, '');
    }
    return label;
  }
  /** Fetching the icon from the icon library  */
  async setIcon() {
    /** Get icon library, if not specified deffaults to default */
    const suxIconLibrary = getLibrary(this.library);
    /** Get icon URL to check for custom icon */
    let url = this.src;
    /** Fetching icon from a set library */
    if (this.name && suxIconLibrary) {
      url = suxIconLibrary.resolver(this.name);
    }
    /** fetching custom icon from a URL */
    if (url) {
      try {
        /** fetch icon file */
        const file = await requestIcon(url);
        if (file.ok) {
          const doc = parser.parseFromString(file.svg, 'text/html');
          /** find svg tag in fetched file */
          const svg = doc.body.querySelector('svg');
          /** if svg tag found, continue */
          if (svg) {
            if (suxIconLibrary && suxIconLibrary.mutator) {
              suxIconLibrary.mutator(svg);
            }
            this.svg = svg.outerHTML;
            this.suxLoad.emit();
          }
          else {
            /** if not valid svg, emit error event */
            this.svg = '';
            this.suxError.emit({ status: file.status });
          }
        }
        else {
          /** if file error, emit error event */
          this.suxError.emit({ status: file.status });
        }
      }
      catch (_a) {
        this.suxError.emit();
      }
    }
    else if (this.svg) {
      // If we can't resolve a URL and an icon was previously set, remove it
      this.svg = null;
    }
  }
  render() {
    return (h("div", { class: {
        'sux-icon': true,
      }, "aria-label": this.getLabel(), innerHTML: this.svg, part: 'base', role: 'img' }));
  }
  static get is() { return "sux-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-icon.css"]
  }; }
  static get assetsDirs() { return ["icons"]; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The name of the icon to draw."
      },
      "attribute": "name",
      "reflect": false
    },
    "src": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "An external URL of an SVG file."
      },
      "attribute": "src",
      "reflect": false
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "An alternative description to use for accessibility. If omitted, the name or src will be used to generate it."
      },
      "attribute": "label",
      "reflect": false
    },
    "library": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The name of a registered custom icon library."
      },
      "attribute": "library",
      "reflect": false,
      "defaultValue": "'default'"
    }
  }; }
  static get states() { return {
    "svg": {}
  }; }
  static get events() { return [{
      "method": "suxLoad",
      "name": "sux-load",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the icon has loaded."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "suxError",
      "name": "sux-error",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the icon failed to load."
      },
      "complexType": {
        "original": "{ status?: number }",
        "resolved": "{ status?: number; }",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "redraw": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": "Fetches the icon and redraws it. Used to handle library registrations."
          }]
      }
    }
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "name",
      "methodName": "handleChange"
    }, {
      "propName": "src",
      "methodName": "handleChange"
    }, {
      "propName": "library",
      "methodName": "handleChange"
    }]; }
}
