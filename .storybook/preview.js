import { addDecorator } from "@storybook/react"; // <- or your storybook framework
import { withThemes } from "storybook-addon-themes/react"; // <- or your storybook framework
import themeMeta from "../dist/theme-storybook.json";

const [defaultTheme] = themeMeta;

addDecorator(withThemes);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: {
    default: defaultTheme.name,
    list: themeMeta,
  },
};
