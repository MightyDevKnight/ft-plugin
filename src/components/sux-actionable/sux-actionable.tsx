import { Component,Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'sux-actionable',
  styleUrl: 'sux-actionable.scss',
  shadow: true,
})
export class SuxActionable {

  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLSuxActionableElement;

  //--------------------------------------------------------------------------
  //
  //  Props
  //
  //--------------------------------------------------------------------------

  /** href attribute to handle link */
  @Prop({ reflect: true }) href?: string;

  /** role attribute to define the function */
  @Prop({ reflect: false }) role?: string;

  /** target attribute for the link */
  @Prop({ reflect: true }) target: '_blank' | '_parent' | '_self' | '_top';


  render() {
    const Tag = 'a';

    return (
      <Tag
      class={{
        'sux-actionable': true,
      }}
      href={this.href}
      role={this.role}
      target={this.target}
      >
        <slot></slot>
      </Tag>
    );
  }

}
