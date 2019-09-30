import { addDecorator, configure } from '@storybook/html';
import centered from '@storybook/addon-centered/html';
import { twig } from 'twig';

const context = require.context('../src', true, /\.stories\.js$/);
const twigContext = require.context('../src/patterns', true, /\.twig$/);

twigContext.keys().forEach(key =>
  twig({
    allowInlineIncludes: true,
    data: twigContext(key).tokens,
    id: key,
    rethrow: true,
  })
);

addDecorator(centered);

configure(context, module);
