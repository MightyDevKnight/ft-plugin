import { Component, Prop, Watch, h } from '@stencil/core';
export class ResponsiveMedia {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * The aspect ratio of the Responsive media in the format of `width:height`, e.g. `16:9`, `4:3`, or `1:1`.
     * Ratios not in this format will be ignored.
     */
    this.aspectRatio = '16:9';
    /** Determines how content will be resized to fit its container. */
    this.fit = 'cover';
  }
  /**
   *
   * Handling When the Aspect Ratio change or add new
   */
  handleAspectRatioChange() {
    this.setAspectRatio();
  }
  /**
   * If Connected Ok. otherwise Call Back and chech the Slots Changes
   */
  connectedCallback() {
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }
  /**
   *
   * Slot Chage and Handle The Aspect Ratio
   */
  handleSlotChange() {
    this.setAspectRatio();
  }
  setAspectRatio() {
    const split = this.aspectRatio.split(':');
    const x = parseInt(split[0]);
    const y = parseInt(split[1]);
    this.base.style.paddingBottom = x && y ? `${(y / x) * 100}%` : null;
  }
  /** Content Element With Slot e.g 'Embeded Media, I Frame Media, Images, Videos */
  render() {
    /** Content element with slot  */
    const contentEl = (h("span", { class: 'content' },
      h("slot", { onSlotchange: this.handleSlotChange })));
    const Tag = 'div';
    return (h(Tag, { ref: el => (this.base = el), part: "base", class: {
        'sux-responsive-media': true,
        'sux-responsive-media--cover': this.fit === 'cover',
        'sux-responsive-media--contain': this.fit === 'contain',
      } }, contentEl));
  }
  static get is() { return "sux-responsive-media"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["responsive-media.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["responsive-media.css"]
  }; }
  static get properties() { return {
    "aspectRatio": {
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
        "text": "The aspect ratio of the Responsive media in the format of `width:height`, e.g. `16:9`, `4:3`, or `1:1`.\nRatios not in this format will be ignored."
      },
      "attribute": "aspect-ratio",
      "reflect": false,
      "defaultValue": "'16:9'"
    },
    "fit": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'contain' | 'cover'",
        "resolved": "\"contain\" | \"cover\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Determines how content will be resized to fit its container."
      },
      "attribute": "fit",
      "reflect": false,
      "defaultValue": "'cover'"
    }
  }; }
  static get watchers() { return [{
      "propName": "aspectRatio",
      "methodName": "handleAspectRatioChange"
    }]; }
}
