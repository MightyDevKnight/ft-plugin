import { newSpecPage } from '@stencil/core/testing';
import { SuxActionable } from '../sux-actionable';

describe('sux-actionable', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxActionable],
      html: `<sux-actionable></sux-actionable>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-actionable>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-actionable>
    `);
  });
});
