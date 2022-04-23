import { Component, h, Prop, Element } from '@stencil/core';
import { IconButtonSize, IconButtonVariant, IconButtonShape } from './interface';


@Component({
  tag: 'sux-icon-button',
  styleUrl: 'sux-icon-button.scss',
  shadow: true
})
export class SuxIconButton {

  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------
  @Element() el: HTMLSuxIconButtonElement;



  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * Name of The Icon
   */
  @Prop({ reflect: true }) name: string;

  /** specify the variant of the icon button, defaults to primary.  */
  @Prop({ reflect: true }) variant: IconButtonVariant = "primary";

  /** specify the style of the icon button, defaults to default.  */
  @Prop({ reflect: true }) shape: IconButtonShape = "default";

  /** specify the size of the icon button, defaults to m */
  @Prop({ reflect: true }) size: IconButtonSize = "m";

  /** Is quiet makes the button appear with least prominence.  */
  @Prop({ reflect: true }) quiet: boolean = false;

  /** is the button disabled  */
  @Prop({ reflect: true }) disabled?: boolean = false;


  /**
   * The Name of Registered Icon in the Library
   */
  @Prop({ reflect: true }) library: string ="default";

  /**
   * Optionally provide external url for custom SVG icon
   */
  @Prop({ reflect: true }) src: string;

  /**
   * A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should
   * always include a label that describes what the icon button does.
   */
  @Prop({ reflect: true }) label: string;

  /**
   * When set, the underlying button will be rendered as an <a> with this href instead of a <button>
   */
  @Prop({ reflect: true }) href: string;

  /**
   * When set, defines the target of the link
   */
  @Prop({ reflect: true }) target: '_blank' | '_parent' | '_self' | '_top';


  render() {
    const { name, size, variant, disabled, quiet, href, shape, target } = this
    const Tag = !href? 'button' : 'a';

    const hrefAttr = href ? { href: href, target: target} : {};

    return (
      <Tag
        class={{
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
        }}
        {...hrefAttr}
        disabled={disabled}
        type="button"
        aria-label={this.label}
      >

        <sux-icon
            name={name}
            src={this.src}
            aria-hidden="true"
            library = {this.library}
        >
        </sux-icon>

      </Tag>
    );
  }
}
