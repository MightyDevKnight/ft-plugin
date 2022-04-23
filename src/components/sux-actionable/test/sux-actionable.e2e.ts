import { newE2EPage } from '@stencil/core/testing';

describe('sux-actionable', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sux-actionable></sux-actionable>');

    const element = await page.find('sux-actionable');
    expect(element).toHaveClass('hydrated');
  });
});
