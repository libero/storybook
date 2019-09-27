import paragraph from "./paragraph";
import italic from '../italic/italic';
import {text} from '@storybook/addon-knobs';

export default { title: 'Paragraph' };

export const withText = () => paragraph({ text: ['Hello ', italic({ text: text('name', 'Chris') }), '!'] });
