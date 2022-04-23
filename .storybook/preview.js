// import { addDecorator } from '@storybook/web-components'
/**
 * storybook-addon-docs-stencilConverts stencil.js doc json derived from stencils output target docs-json to storybook ArgTypes.
 * - Storybook will render basic controls for properties Controls.
 * - Storybook will auto generate documentation for Props, Events, Methods, Slots, Shadow Parts and Custom Properties.
 * - Storybook doc page will contain stencils component documentation (readme.md or inline)
 */
import { extractArgTypes, extractComponentDescription, setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import themeMeta from '../dist/theme-storybook.json';
import docJson from '../docs.json';

if (docJson) setStencilDocJson(docJson);

const [defaultTheme] = themeMeta;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: false,
  },
  docs: {
    extractArgTypes,
    extractComponentDescription,
  },
  hideNoControlsWarning: true, // required by storybook-addon-docs-stencil
  docs: {
    extractArgTypes,
    extractComponentDescription,
  },
  backgrounds: {
    default: 'normal',
  },
  // storybook-addon-themes config for themes.
  // Changes the body class to swap tokens
  themes: {
    default: defaultTheme.name,
    list: themeMeta,
  },
};
