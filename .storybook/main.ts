import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");
const config: StorybookConfig = {
  stories: [
    // "../pages/**/*.stories.tsx",
    // "../pages/**/*.stories.js",
    "../components/**/*.stories.tsx",
    "../views/**/*.stories.tsx",
  ],
  /** Expose public folder to storybook as static */
  staticDirs: ["../public"],
  // typescript: { reactDocgen: false },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  typescript: {
    reactDocgen: "react-docgen",
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {},
  webpackFinal: (config) => {
    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    config!.resolve!.alias = {
      ...config.resolve?.alias,
      "@": [path.resolve(__dirname, "../src/"), path.resolve(__dirname, "../")],
    };

    /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    config!.resolve!.roots = [
      path.resolve(__dirname, "../public"),
      "node_modules",
    ];
    return config;
  },
};
export default config;

// .storybook/main.js
export const framework = "@storybook/react";
