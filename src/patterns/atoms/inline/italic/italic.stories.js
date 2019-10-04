import italic from './italic.twig';

export default {
  title: 'Atoms|Inline/Italic',
};

export const RN = () => italic({ text: 'Hello world.' });

export const Russian = () => italic(
  {
    attributes: {
      lang: 'ru',
    },
    text: 'Привет, мир',
  },
);
