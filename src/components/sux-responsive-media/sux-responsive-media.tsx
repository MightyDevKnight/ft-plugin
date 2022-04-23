import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'sux-responsive-media',
  styleUrl: 'responsive-media.scss',
  shadow: true,
})
export class ResponsiveMedia {
  base: HTMLElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------
  /**
   * The aspect ratio of the Responsive media in the format of `width:height`, e.g. `16:9`, `4:3`, or `1:1`.
   * Ratios not in this format will be ignored.
   */
  @Prop() aspectRatio = '16:9';

  /** Determines how content will be resized to fit its container. */
  @Prop() fit: 'contain' | 'cover' = 'cover';

  @Watch('aspectRatio')

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
    const contentEl = (
      <span class={'content'}>
        <slot onSlotchange={this.handleSlotChange} />
      </span>
    );
    const Tag = 'div';
    return (
      <Tag
        ref={el => (this.base = el)}
        part="base"
        class={{
          'sux-responsive-media': true,
          'sux-responsive-media--cover': this.fit === 'cover',
          'sux-responsive-media--contain': this.fit === 'contain',
        }}
      >
        {contentEl}
      </Tag>
    );
  }
}
