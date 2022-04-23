import { newSpecPage } from '@stencil/core/testing';
import { SuxAvatar } from '../sux-avatar';

describe('sux-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SuxAvatar],
      html: `<sux-avatar></sux-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <sux-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sux-avatar>
    `);
  });
});
