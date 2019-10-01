import { addDecorator, addParameters, configure } from '@storybook/html';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import centered from '@storybook/addon-centered/html';
import { withA11y } from '@storybook/addon-a11y';

const context = require.context('../src', true, /\.stories\.js$/);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(centered);
addDecorator(withA11y);

configure(context, module);
