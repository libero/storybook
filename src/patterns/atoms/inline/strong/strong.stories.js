import strong from './strong.twig';

export default {
  title: 'Atoms|Inline/Strong',
};

export const EN = () => strong({ text: 'Hello world' });

export const RU = () => strong(
  {
    attributes: {
      lang: 'ru',
    },
    text: 'Привет, мир',
  },
);
