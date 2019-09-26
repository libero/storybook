import {configure} from '@storybook/html';
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

configure(context, module);
