import paragraph from './paragraph.twig';
import { italic } from '../../../includes';

export default {
  title: 'Atoms|Block/Paragraph',
};

export const Basic = () => paragraph({
  text: [
    'It\'s not ',
    italic({ text: 'just' }),
    ' a question of conquering a summit previously unknown, but of tracing ',
    italic({ text: 'step by step' }),
    ' a new pathway to it.'],
});
