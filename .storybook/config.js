import { addDecorator, addParameters, configure } from '@storybook/polymer';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

const context = require.context('../src', true, /\.stories\.js$/);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withA11y);

configure(context, module);
