import { AvatarSize } from './interfaces';
export declare class SuxAvatar {
  el: HTMLSuxAvatarElement;
  /** The image url for the image to be displayed on the Avatar */
  imageUrl: string;
  /** specify the size of the Avatar, defaults to xxxl */
  size: AvatarSize;
  /** optionally pass initials to display on the Avatar  */
  initials: string;
  /** pass an image alt text for accessibility */
  label: string;
  /**  */
  hasError: boolean;
  connectedCallback(): void;
  handleImageError(): void;
  render(): any;
}
