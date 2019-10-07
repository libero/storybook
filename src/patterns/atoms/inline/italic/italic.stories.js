import italic from './italic.twig';

export default {
  title: 'Atoms|Inline/Italic',
};

export const EN = () => italic({ text: 'Hello world' });

export const RU = () => italic(
  {
    attributes: {
      lang: 'ru',
    },
    text: 'Привет, мир',
  },
);
