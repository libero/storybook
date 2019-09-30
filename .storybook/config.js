import { addDecorator, configure } from '@storybook/html';
import centered from '@storybook/addon-centered/html';

const context = require.context('../src', true, /\.stories\.js$/);

addDecorator(centered);

configure(context, module);
