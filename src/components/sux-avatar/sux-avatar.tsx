import { Component, h, Prop, Element, State } from '@stencil/core';
import { AvatarSize } from './interfaces';

@Component({
  tag: 'sux-avatar',
  styleUrl: 'sux-avatar.scss',
  shadow: true,
})
export class SuxAvatar {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLSuxAvatarElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /** The image url for the image to be displayed on the Avatar */
  @Prop({ reflect: false }) imageUrl: string = '';

  /** specify the size of the Avatar, defaults to xxxl */
  @Prop({ reflect: true }) size: AvatarSize = 'xxxl';

  /** optionally pass initials to display on the Avatar  */
  @Prop({ reflect: false }) initials: string = '';

  /** pass an image alt text for accessibility */
  @Prop({ reflect: false }) label: string = '';

  //--------------------------------------------------------------------------
  //
  //  States
  //
  //--------------------------------------------------------------------------


  /**  */
  @State () hasError = false;

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
      !this.initials && !this.imageUrl ? (
        <div part="icon" class="sux-avatar--icon">
          <slot name="icon">
            <sux-icon name="person" />
          </slot>
        </div>
      ) :
      /** if image URL is provided render the image and there is no error */
      this.imageUrl && !this.hasError ? (
        <img part="image" class="sux-avatar--img" src={imageUrl} alt={label} title={label} />
      ) :
      /** if only initials provided render initials  */
      this.initials ? (
        <div class="sux-avatar--initials">{initials}</div>
      ) : null;

    console.log(contentEl);
    return (
      <div
        class={{
          'sux-avatar': true,
          'sux-avatar--xxs': size === 'xxs',
          'sux-avatar--xs': size === 'xs',
          'sux-avatar--s': size === 's',
          'sux-avatar--m': size === 'm',
          'sux-avatar--l': size === 'l',
          'sux-avatar--xl': size === 'xl',
          'sux-avatar--xxl': size === 'xxl',
          'sux-avatar--xxxl': size === 'xxxl',
        }}
        role="img"
        aria-label={label}
      >
        {contentEl}
      </div>
    );
  }
}
