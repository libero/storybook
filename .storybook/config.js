import { addDecorator, configure } from '@storybook/html';
import centered from '@storybook/addon-centered/html';
import { withA11y } from '@storybook/addon-a11y';

const context = require.context('../src', true, /\.stories\.js$/);

addDecorator(centered);
addDecorator(withA11y);

configure(context, module);
