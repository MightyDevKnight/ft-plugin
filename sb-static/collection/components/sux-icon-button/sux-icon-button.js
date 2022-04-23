import { Component, h, Prop, Element } from '@stencil/core';
export class SuxIconButton {
  constructor() {
    /** specify the variant of the icon button, defaults to primary.  */
    this.variant = "primary";
    /** specify the style of the icon button, defaults to default.  */
    this.shape = "default";
    /** specify the size of the icon button, defaults to m */
    this.size = "m";
    /** Is quiet makes the button appear with least prominence.  */
    this.quiet = false;
    /** is the button disabled  */
    this.disabled = false;
    /**
     * The Name of Registered Icon in the Library
     */
    this.library = "default";
  }
  render() {
    const { name, size, variant, disabled, quiet, href, shape, target } = this;
    const Tag = !href ? 'button' : 'a';
    const hrefAttr = href ? { href: href, target: target } : {};
    return (h(Tag, Object.assign({ class: {
        'sux-icon-button': true,
        'sux-icon-button--cta': variant === 'cta',
        'sux-icon-button--primary': variant === 'primary',
        'sux-icon-button--secondary': variant === 'secondary',
        'sux-icon-button--negative': variant === 'negative',
        'sux-icon-button--default': shape === 'default',
        'sux-icon-button--round': shape === 'round',
        'sux-icon-button--sizeS': size === 's',
        'sux-icon-button--sizeM': size === 'm',
        'sux-icon-button--sizeL': size === 'l',
        'sux-icon-button--sizeXL': size === 'xl',
        'quiet': quiet,
      } }, hrefAttr, { disabled: disabled, type: "button", "aria-label": this.label }),
      h("sux-icon", { name: name, src: this.src, "aria-hidden": "true", library: this.library })));
  }
  static get is() { return "sux-icon-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-icon-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-icon-button.css"]
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
        "text": "Name of The Icon"
      },
      "attribute": "name",
      "reflect": true
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "IconButtonVariant",
        "resolved": "\"cta\" | \"negative\" | \"primary\" | \"secondary\"",
        "references": {
          "IconButtonVariant": {
            "location": "import",
            "path": "./interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the variant of the icon button, defaults to primary."
      },
      "attribute": "variant",
      "reflect": true,
      "defaultValue": "\"primary\""
    },
    "shape": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "IconButtonShape",
        "resolved": "\"default\" | \"round\"",
        "references": {
          "IconButtonShape": {
            "location": "import",
            "path": "./interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the style of the icon button, defaults to default."
      },
      "attribute": "shape",
      "reflect": true,
      "defaultValue": "\"default\""
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "IconButtonSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\"",
        "references": {
          "IconButtonSize": {
            "location": "import",
            "path": "./interface"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the size of the icon button, defaults to m"
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "quiet": {
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
        "text": "Is quiet makes the button appear with least prominence."
      },
      "attribute": "quiet",
      "reflect": true,
      "defaultValue": "false"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "is the button disabled"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "The Name of Registered Icon in the Library"
      },
      "attribute": "library",
      "reflect": true,
      "defaultValue": "\"default\""
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
        "text": "Optionally provide external url for custom SVG icon"
      },
      "attribute": "src",
      "reflect": true
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
        "text": "A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should\nalways include a label that describes what the icon button does."
      },
      "attribute": "label",
      "reflect": true
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
        "text": "When set, the underlying button will be rendered as an <a> with this href instead of a <button>"
      },
      "attribute": "href",
      "reflect": true
    },
    "target": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'_blank' | '_parent' | '_self' | '_top'",
        "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "When set, defines the target of the link"
      },
      "attribute": "target",
      "reflect": true
    }
  }; }
  static get elementRef() { return "el"; }
}
