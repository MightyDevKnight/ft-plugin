import { Component, Element, Prop, h } from '@stencil/core';
export class SuxActionable {
  render() {
    const Tag = 'a';
    return (h(Tag, { class: {
        'sux-actionable': true,
      }, href: this.href, role: this.role, target: this.target },
      h("slot", null)));
  }
  static get is() { return "sux-actionable"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-actionable.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-actionable.css"]
  }; }
  static get properties() { return {
    "href": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "href attribute to handle link"
      },
      "attribute": "href",
      "reflect": true
    },
    "role": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "role attribute to define the function"
      },
      "attribute": "role",
      "reflect": false
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
        "text": "target attribute for the link"
      },
      "attribute": "target",
      "reflect": true
    }
  }; }
  static get elementRef() { return "el"; }
}
