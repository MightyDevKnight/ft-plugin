import { IconButtonSize, IconButtonVariant, IconButtonShape } from './interface';
export declare class SuxIconButton {
  el: HTMLSuxIconButtonElement;
  /**
   * Name of The Icon
   */
  name: string;
  /** specify the variant of the icon button, defaults to primary.  */
  variant: IconButtonVariant;
  /** specify the style of the icon button, defaults to default.  */
  shape: IconButtonShape;
  /** specify the size of the icon button, defaults to m */
  size: IconButtonSize;
  /** Is quiet makes the button appear with least prominence.  */
  quiet: boolean;
  /** is the button disabled  */
  disabled?: boolean;
  /**
   * The Name of Registered Icon in the Library
   */
  library: string;
  /**
   * Optionally provide external url for custom SVG icon
   */
  src: string;
  /**
   * A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should
   * always include a label that describes what the icon button does.
   */
  label: string;
  /**
   * When set, the underlying button will be rendered as an <a> with this href instead of a <button>
   */
  href: string;
  /**
   * When set, defines the target of the link
   */
  target: '_blank' | '_parent' | '_self' | '_top';
  render(): any;
}
