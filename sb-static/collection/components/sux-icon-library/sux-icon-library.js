import { Component, Prop, Watch } from '@stencil/core';
import { registerLibrary, unregisterLibrary } from './icon-library-registry';
export class SuxIconLibrary {
  handleUpdate() {
    // Subsequent registrations with the same name will invalidate existing ones
    this.register();
  }
  connectedCallback() {
    if (this.name && this.resolver) {
      this.register();
    }
  }
  disconnectedCallback() {
    unregisterLibrary(this.name);
  }
  register() {
    const { name, resolver, mutator } = this;
    registerLibrary(name, resolver, mutator);
  }
  render() {
    return null;
  }
  static get is() { return "sux-icon-library"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-icon-library.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-icon-library.css"]
  }; }
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
        "text": "The name of the icon library."
      },
      "attribute": "name",
      "reflect": false
    },
    "resolver": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IconLibraryResolver",
        "resolved": "(name: string) => string",
        "references": {
          "IconLibraryResolver": {
            "location": "import",
            "path": "./icon-library-registry"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A function that translates an icon name to a URL where the corresponding SVG file exists The URL can be local or a\nCORS-enabled endpoint."
      }
    },
    "mutator": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IconLibraryMutator",
        "resolved": "(svg: SVGElement) => void",
        "references": {
          "IconLibraryMutator": {
            "location": "import",
            "path": "./icon-library-registry"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A function that mutates the SVG element before it renders."
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "name",
      "methodName": "handleUpdate"
    }, {
      "propName": "resolver",
      "methodName": "handleUpdate"
    }, {
      "propName": "mutator",
      "methodName": "handleUpdate"
    }]; }
}
