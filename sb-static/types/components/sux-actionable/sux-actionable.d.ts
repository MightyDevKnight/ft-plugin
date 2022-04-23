export declare class SuxActionable {
  el: HTMLSuxActionableElement;
  /** href attribute to handle link */
  href?: string;
  /** role attribute to define the function */
  role?: string;
  /** target attribute for the link */
  target: '_blank' | '_parent' | '_self' | '_top';
  render(): any;
}
