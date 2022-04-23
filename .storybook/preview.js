import { addDecorator } from "@storybook/react"; // <- or your storybook framework
import { withThemes } from "storybook-addon-themes/react"; // <- or your storybook framework
import { addParameters } from "@storybook/react";

addDecorator(withThemes);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: {
    default: "twitter",
    list: [
      { name: "twitter", class: ["theme-twt", "light-mode"], color: "#00aced" },
      { name: "facebook", class: ["theme-fb", "dark-mode"], color: "#3b5998" },
    ],
    // onchange(themeName):
  },
};

addParameters({
  darkMode: {
    current: "light",
    // dark: {}
  },
});
