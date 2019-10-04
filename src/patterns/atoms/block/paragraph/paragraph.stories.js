import paragraph from './paragraph.twig';

export default {
  title: 'Atoms|Block/Paragraph',
};

export const Basic = () => paragraph({
  text: [
    'It\'s not ',
    { template: './atoms/inline/italic/italic.twig', arguments: { text: 'just' } },
    ' a question of conquering a summit previously unknown, but of tracing ',
    { template: './atoms/inline/italic/italic.twig', arguments: { text: 'step by step' } },
    ' a new pathway to it.'],
});
