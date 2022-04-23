import { Component, Prop, State, h, Element } from '@stencil/core';
import { LinkSize, LinkVariant } from './interface';

@Component({
  tag: 'sux-link',
  styleUrl: 'sux-link.scss',
  shadow: true,
})
export class SuxLink {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------
  @Element() el: HTMLSuxLinkElement;
  //--------------------------------------------------------------------------
  //
  //  State
  //
  //--------------------------------------------------------------------------

  @State() hasFocus = false;

  //--------------------------------------------------------------------------
  //
  //  Props
  //
  //--------------------------------------------------------------------------

  /** specify the appearance of the Link, defaults to primary.  */
  @Prop({ reflect: true }) variant: LinkVariant = 'primary';

  /** specify the size of the Link, defaults to m */
  @Prop({ reflect: true }) size: LinkSize = 'm';

  /*
   * Set to true to draw the Sux Link in a disabled state.
   */
  @Prop({ reflect: true }) disabled = false;

  /*
   * href is used to set the href attribute on the anchor tag.
   */
  @Prop({ reflect: true }) href: string = '';

  render() {
    const { size, variant, href } = this;
    return (
      <a
        part="base"
        class={{
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
        }}
        // role="suxlink"
        aria-disabled={this.disabled ? 'true' : 'false'}
        tabIndex={!this.disabled ? 0 : null}
        href={href}
      >
        <slot />
      </a>
    );
  }
}
