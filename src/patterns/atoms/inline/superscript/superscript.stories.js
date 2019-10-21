import superscript from './superscript.twig';

export default {
  title: 'Atoms|Inline/Superscript',
};

export const EN = () => superscript({ text: 'Hello world' });

export const RU = () => superscript(
  {
    attributes: {
      lang: 'ru',
    },
    text: 'Привет, мир',
  },
);
