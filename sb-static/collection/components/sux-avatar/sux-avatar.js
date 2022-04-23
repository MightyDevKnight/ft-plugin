import { Component, h, Prop, Element, State } from '@stencil/core';
export class SuxAvatar {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The image url for the image to be displayed on the Avatar */
    this.imageUrl = '';
    /** specify the size of the Avatar, defaults to xxxl */
    this.size = 'xxxl';
    /** optionally pass initials to display on the Avatar  */
    this.initials = '';
    /** pass an image alt text for accessibility */
    this.label = '';
    //--------------------------------------------------------------------------
    //
    //  States
    //
    //--------------------------------------------------------------------------
    /**  */
    this.hasError = false;
  }
  connectedCallback() {
    this.handleImageError = this.handleImageError.bind(this);
  }
  handleImageError() {
    this.hasError = true;
  }
  render() {
    const { size, label, imageUrl, initials } = this;
    const contentEl = 
    /** if no initials or image URL default to icon */
    !this.initials && !this.imageUrl ? (h("div", { part: "icon", class: "sux-avatar--icon" },
      h("slot", { name: "icon" },
        h("sux-icon", { name: "person" })))) :
      /** if image URL is provided render the image and there is no error */
      this.imageUrl && !this.hasError ? (h("img", { part: "image", class: "sux-avatar--img", src: imageUrl, alt: label, title: label })) :
        /** if only initials provided render initials  */
        this.initials ? (h("div", { class: "sux-avatar--initials" }, initials)) : null;
    console.log(contentEl);
    return (h("div", { class: {
        'sux-avatar': true,
        'sux-avatar--xxs': size === 'xxs',
        'sux-avatar--xs': size === 'xs',
        'sux-avatar--s': size === 's',
        'sux-avatar--m': size === 'm',
        'sux-avatar--l': size === 'l',
        'sux-avatar--xl': size === 'xl',
        'sux-avatar--xxl': size === 'xxl',
        'sux-avatar--xxxl': size === 'xxxl',
      }, role: "img", "aria-label": label }, contentEl));
  }
  static get is() { return "sux-avatar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sux-avatar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sux-avatar.css"]
  }; }
  static get properties() { return {
    "imageUrl": {
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
        "text": "The image url for the image to be displayed on the Avatar"
      },
      "attribute": "image-url",
      "reflect": false,
      "defaultValue": "''"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "AvatarSize",
        "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\" | \"xxl\" | \"xxs\" | \"xxxl\"",
        "references": {
          "AvatarSize": {
            "location": "import",
            "path": "./interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the size of the Avatar, defaults to xxxl"
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "'xxxl'"
    },
    "initials": {
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
        "text": "optionally pass initials to display on the Avatar"
      },
      "attribute": "initials",
      "reflect": false,
      "defaultValue": "''"
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
        "text": "pass an image alt text for accessibility"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
  static get states() { return {
    "hasError": {}
  }; }
  static get elementRef() { return "el"; }
}
