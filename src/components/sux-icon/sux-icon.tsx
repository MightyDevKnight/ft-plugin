import { Component, Element, Event, EventEmitter, Method, Prop, State, Watch, h } from '@stencil/core';
import { getLibrary, watchSuxIcon, unwatchSuxIcon } from '../sux-icon-library/icon-library-registry';
import { requestIcon } from './request';

const parser = new DOMParser();

/**
 * @part base - The component's base wrapper.
 */
@Component({
  tag: 'sux-icon',
  styleUrl: 'sux-icon.scss',
  shadow: true,
  assetsDirs: ['icons'],
})
export class Icon {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------
  @Element() host: HTMLSuxIconElement;

  //--------------------------------------------------------------------------
  //
  //  State
  //
  //--------------------------------------------------------------------------

  @State() svg: string;

  //--------------------------------------------------------------------------
  //
  //  Props
  //
  //--------------------------------------------------------------------------

  /** The name of the icon to draw. */
  @Prop() name: string;

  /** An external URL of an SVG file. */
  @Prop() src: string;

  /** An alternative description to use for accessibility. If omitted, the name or src will be used to generate it. */
  @Prop() label: string;

  /** The name of a registered custom icon library. */
  @Prop() library = 'default';

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /** Emitted when the icon has loaded. */
  @Event({ eventName: 'sux-load' }) suxLoad: EventEmitter;

  /** Emitted when the icon failed to load. */
  @Event({ eventName: 'sux-error' }) suxError: EventEmitter<{ status?: number }>;

  @Watch('name')
  @Watch('src')
  @Watch('library')
  handleChange(): void {
    this.setIcon();
  }

  // If connected or icon available show that icon
  connectedCallback() {
    watchSuxIcon(this.host);
  }

  // if Icon is loaded Successfully
  componentDidLoad() {
    this.setIcon();
  }

  // if it is not connected the icon should not show.
  disconnectedCallback() {
    unwatchSuxIcon(this.host);
  }

  //--------------------------------------------------------------------------
  //
  //  Methods
  //
  //--------------------------------------------------------------------------

  /** @internal Fetches the icon and redraws it. Used to handle library registrations. */
  @Method()
  async redraw() {
    this.setIcon();
  }

  /** If the label is not provided, take the file name of the icon as the label */
  getLabel() {
    let label = '';

    if (this.label) {
      label = this.label;
    } else if (this.name) {
      label = this.name.replace(/-/g, ' ');
    } else if (this.src) {
      label = this.src.replace(/.*\//, '').replace(/-/g, ' ').replace(/\.svg/i, '');
    }

    return label;
  }

  /** Fetching the icon from the icon library  */
  async setIcon() {
    /** Get icon library, if not specified deffaults to default */
    const suxIconLibrary = getLibrary(this.library);

    /** Get icon URL to check for custom icon */
    let url = this.src;

    /** Fetching icon from a set library */
    if (this.name && suxIconLibrary) {
      url = suxIconLibrary.resolver(this.name);
    }

    /** fetching custom icon from a URL */
    if (url) {
      try {
        /** fetch icon file */
        const file = await requestIcon(url);
        if (file.ok) {
          const doc = parser.parseFromString(file.svg, 'text/html');
          /** find svg tag in fetched file */
          const svg = doc.body.querySelector('svg');

          /** if svg tag found, continue */
          if (svg) {
            if (suxIconLibrary && suxIconLibrary.mutator) {
              suxIconLibrary.mutator(svg);
            }

            this.svg = svg.outerHTML;
            this.suxLoad.emit();
          } else {
            /** if not valid svg, emit error event */
            this.svg = '';
            this.suxError.emit({ status: file.status });
          }
        } else {
          /** if file error, emit error event */
          this.suxError.emit({ status: file.status });
        }
      } catch {
        this.suxError.emit();
      }
    } else if (this.svg) {
      // If we can't resolve a URL and an icon was previously set, remove it
      this.svg = null;
    }
  }

  render() {
    return (
      <div
        class={{
          'sux-icon': true,
        }}
        aria-label={this.getLabel()}
        innerHTML={this.svg}
        part={'base'}
        role={'img'}
      ></div>
    );
  }
}
