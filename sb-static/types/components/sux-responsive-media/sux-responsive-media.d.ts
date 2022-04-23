export declare class ResponsiveMedia {
  base: HTMLElement;
  /**
   * The aspect ratio of the Responsive media in the format of `width:height`, e.g. `16:9`, `4:3`, or `1:1`.
   * Ratios not in this format will be ignored.
   */
  aspectRatio: string;
  /** Determines how content will be resized to fit its container. */
  fit: 'contain' | 'cover';
  /**
   *
   * Handling When the Aspect Ratio change or add new
   */
  handleAspectRatioChange(): void;
  /**
   * If Connected Ok. otherwise Call Back and chech the Slots Changes
   */
  connectedCallback(): void;
  /**
   *
   * Slot Chage and Handle The Aspect Ratio
   */
  handleSlotChange(): void;
  setAspectRatio(): void;
  /** Content Element With Slot e.g 'Embeded Media, I Frame Media, Images, Videos */
  render(): any;
}
