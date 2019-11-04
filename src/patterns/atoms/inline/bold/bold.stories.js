import bold from './bold.twig';

export default {
  title: 'Atoms|Inline/Bold',
};

export const EN = () => bold({ text: 'Hello world' });

export const RU = () => bold(
  {
    attributes: {
      lang: 'ru',
    },
    text: 'Привет, мир',
  },
);
