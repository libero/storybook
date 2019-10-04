import paragraph from './paragraph.twig';
import italic from '../../inline/italic/italic.twig';

export default {
  title: 'Atoms|Block/Paragraph',
};

export const Basic = () => paragraph(
  {
    text: [
      'It\'s not ',
      italic.reference({ text: 'just' }),
      ' a question of conquering a summit previously unknown, but of tracing ',
      italic.reference({ text: 'step by step' }),
      ' a new pathway to it.',
    ],
  },
);
