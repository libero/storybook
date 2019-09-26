import { configure } from '@storybook/html';

const context = require.context('../src', true, /\.stories\.js$/);

configure(context, module);
