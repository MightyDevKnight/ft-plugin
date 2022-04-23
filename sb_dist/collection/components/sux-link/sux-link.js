import { Component, Prop, State, h, Element } from '@stencil/core';
export class SuxLink {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  State
    //
    //--------------------------------------------------------------------------
    this.hasFocus = false;
    //--------------------------------------------------------------------------
    //
    //  Props
    //
    //--------------------------------------------------------------------------
    /** specify the appearance of the Link, defaults to primary.  */
    this.variant = 'primary';
    /** specify the size of the Link, defaults to m */
    this.size = 'm';
    /*
     * Set to true to draw the Sux Link in a disabled state.
     */
    this.disabled = false;
    /*
     * href is used to set the href attribute on the anchor tag.
     */
    this.href = '';
  }
  render() {
    const { size, variant, href } = this;
    return (h("a", { part: "base", class: {
        'sux-link': true,
        'sux-link--disabled': this.disabled,
        'sux-link--primary': variant === 'primary',
        'sux-link--secondary': variant === 'secondary',
        'sux-link--over-background': variant === 'over-background',
        'sux-link--sizeXS': size === 'xs',
        'sux-link--sizeS': size === 's',
        'sux-link--sizeM': size === 'm',
        'sux-link--sizeL': size === 'l',
        'sux-link--sizeXL': size === 'xl',
        'sux-link--sizeXXL': size === 'xxl',
        'sux-link--sizeXXXL': size === 'xxxl',
      }, "aria-disabled": this.disabled ? 'true' : 'false', tabIndex: !this.disabled ? 0 : null, href: href },
      h("slot", null)));
  }
  static get is() { return "sux-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-link.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-link.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "LinkVariant",
        "resolved": "\"over-background\" | \"primary\" | \"secondary\"",
        "references": {
          "LinkVariant": {
            "location": "import",
            "path": "./interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the appearance of the Link, defaults to primary."
      },
      "attribute": "variant",
      "reflect": true,
      "defaultValue": "'primary'"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "LinkSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\" | \"xxl\" | \"xxxl\"",
        "references": {
          "LinkSize": {
            "location": "import",
            "path": "./interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the size of the Link, defaults to m"
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "'m'"
    },
    "disabled": {
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
        "text": ""
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "href": {
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
        "text": ""
      },
      "attribute": "href",
      "reflect": true,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "hasFocus": {}
  }; }
  static get elementRef() { return "el"; }
}
