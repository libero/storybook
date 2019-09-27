import { addDecorator, configure } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';

const context = require.context('../src', true, /\.stories\.js$/);

addDecorator(withKnobs);

configure(context, module);
