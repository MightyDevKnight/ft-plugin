import { newE2EPage } from '@stencil/core/testing';

describe('sux-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-avatar></sux-avatar>');

    const element = await page.find('sux-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
