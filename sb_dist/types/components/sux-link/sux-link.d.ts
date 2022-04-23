import { LinkSize, LinkVariant } from './interface';
export declare class SuxLink {
  el: HTMLSuxLinkElement;
  hasFocus: boolean;
  /** specify the appearance of the Link, defaults to primary.  */
  variant: LinkVariant;
  /** specify the size of the Link, defaults to m */
  size: LinkSize;
  disabled: boolean;
  href: string;
  render(): any;
}
