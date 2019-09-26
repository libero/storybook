import { addParameters, configure } from '@storybook/html';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const context = require.context('../src', true, /\.stories\.js$/);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

configure(context, module);
