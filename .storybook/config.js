import {addParameters, configure} from '@storybook/html';
import theme from './theme';

const context = require.context('../src', true, /\.stories\.js$/);

addParameters({
    options: {
        theme: theme,
    },
});

configure(context, module);
