import { addDecorator, addParameters, configure } from '@storybook/html';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import centered from '@storybook/addon-centered/html';

const context = require.context('../src', true, /\.stories\.js$/);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(centered);

configure(context, module);
