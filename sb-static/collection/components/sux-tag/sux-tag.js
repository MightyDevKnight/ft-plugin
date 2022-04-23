import { Component, Element, Host, h, Prop } from '@stencil/core';
import { TAG_SIZE, TAG_VARIANT } from '../defaults/prop-defaults';
export class SuxTag {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Size
     */
    this.size = TAG_SIZE;
    /**
     * Variant
     */
    this.variant = TAG_VARIANT;
    /**
     * State
     */
    this.status = 'info';
    /** Prefix */
    this.hasPrefix = false;
    /** suffix */
    this.hasSuffix = false;
  }
  render() {
    /** Prefix (left side)  */
    const prefixEl = (h("div", { class: 'prefix' },
      h("slot", { name: "prefix" })));
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' },
      h("slot", null)));
    /** Suffix (right side)  */
    const suffixEl = (h("div", { class: 'suffix' },
      h("slot", { name: "suffix" })));
    const { size, variant, status, hasPrefix, hasSuffix } = this;
    return (h(Host, null,
      h("div", { class: {
          'sux-tag': true,
          '--info': status == 'info',
          '--success': status == 'success',
          '--warning': status == 'warning',
          '--error': status == 'error',
          '--neutral': status == 'neutral',
          'sux-tag--solid': variant == 'solid',
          'sux-tag--inverted': variant == 'inverted',
          'sux-tag--outlined': variant == 'outlined',
          'sux-tag--borderless': variant == 'borderless',
          'sux-tag--sizeS': size == 's',
          'sux-tag--sizeM': size == 'm',
          'sux-tag--sizeL': size == 'l',
          'sux-tag--sizeXL': size == 'xl',
        } },
        hasPrefix ? prefixEl : null,
        contentEl,
        hasSuffix ? suffixEl : null)));
  }
  static get is() { return "sux-tag"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-tag.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-tag.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TagSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
        "references": {
          "TagSize": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Size"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "TAG_SIZE"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TagVariant",
        "resolved": "\"borderless\" | \"inverted\" | \"outlined\" | \"solid\"",
        "references": {
          "TagVariant": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Variant"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "TAG_VARIANT"
    },
    "status": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TagStatus",
        "resolved": "\"error\" | \"info\" | \"neutral\" | \"success\" | \"warning\"",
        "references": {
          "TagStatus": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "State"
      },
      "attribute": "status",
      "reflect": false,
      "defaultValue": "'info'"
    },
    "hasPrefix": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Prefix"
      },
      "attribute": "has-prefix",
      "reflect": false,
      "defaultValue": "false"
    },
    "hasSuffix": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "suffix"
      },
      "attribute": "has-suffix",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
