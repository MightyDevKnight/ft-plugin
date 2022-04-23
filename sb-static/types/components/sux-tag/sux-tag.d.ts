import { TagSize, TagVariant, TagStatus } from './interfaces';
export declare class SuxTag {
  el: HTMLSuxTagElement;
  /**
   * Size
   */
  size: TagSize;
  /**
   * Variant
   */
  variant: TagVariant;
  /**
   * State
   */
  status: TagStatus;
  /** Prefix */
  hasPrefix: boolean;
  /** suffix */
  hasSuffix: boolean;
  render(): any;
}
