import subscript from './subscript.twig';

export default {
  title: 'Atoms|Inline/Subscript',
};

export const EN = () => subscript({ text: 'Hello world' });

export const RU = () => subscript(
  {
    attributes: {
      lang: 'ru',
    },
    text: 'Привет, мир',
  },
);
