import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @part base - The component's base wrapper.
 */
export declare class Icon {
  host: HTMLSuxIconElement;
  svg: string;
  /** The name of the icon to draw. */
  name: string;
  /** An external URL of an SVG file. */
  src: string;
  /** An alternative description to use for accessibility. If omitted, the name or src will be used to generate it. */
  label: string;
  /** The name of a registered custom icon library. */
  library: string;
  /** Emitted when the icon has loaded. */
  suxLoad: EventEmitter;
  /** Emitted when the icon failed to load. */
  suxError: EventEmitter<{
    status?: number;
  }>;
  handleChange(): void;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  /** @internal Fetches the icon and redraws it. Used to handle library registrations. */
  redraw(): Promise<void>;
  /** If the label is not provided, take the file name of the icon as the label */
  getLabel(): string;
  /** Fetching the icon from the icon library  */
  setIcon(): Promise<void>;
  render(): any;
}
