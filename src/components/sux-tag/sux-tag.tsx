import { Component, Element, Host, h, Prop } from '@stencil/core';
import { TagSize, TagVariant, TagStatus } from './interfaces';
import { TAG_SIZE, TAG_VARIANT } from '../defaults/prop-defaults';

@Component({
  tag: 'sux-tag',
  styleUrl: 'sux-tag.scss',
  shadow: true,
})
export class SuxTag {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLSuxTagElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * Size
   */
  @Prop() size: TagSize = TAG_SIZE;

  /**
   * Variant
   */
  @Prop() variant: TagVariant = TAG_VARIANT;

  /**
   * State
   */
  @Prop() status: TagStatus = 'info';

  /** Prefix */
  @Prop() hasPrefix: boolean = false;

  /** suffix */
  @Prop() hasSuffix: boolean = false;

  render() {
    /** Prefix (left side)  */
    const prefixEl = (
      <div class={'prefix'}>
        <slot name="prefix"></slot>
      </div>
    );

    /** Content element with slot  */
    const contentEl = (
      <span class={'content'}>
        <slot />
      </span>
    );

    /** Suffix (right side)  */
    const suffixEl = (
      <div class={'suffix'}>
        <slot name="suffix"></slot>
      </div>
    );
    const { size, variant, status, hasPrefix, hasSuffix } = this;
    return (
      <Host>
        <div
          class={{
            'sux-tag': true,
            '--info': status == 'info',
            '--success': status == 'success',
            '--warning': status == 'warning',
            '--error': status == 'error',
            '--neutral': status == 'neutral',
            'sux-tag--solid': variant == 'solid',
            'sux-tag--inverted': variant == 'inverted',
            'sux-tag--outlined': variant == 'outlined',
            'sux-tag--borderless': variant == 'borderless',
            'sux-tag--sizeS': size == 's',
            'sux-tag--sizeM': size == 'm',
            'sux-tag--sizeL': size == 'l',
            'sux-tag--sizeXL': size == 'xl',
          }}
        >
          {hasPrefix ? prefixEl : null}
          {contentEl}
          {hasSuffix ? suffixEl : null}
        </div>
      </Host>
    );
  }
}
