import italic from './';

export default {
  title: 'Atoms|Inline/Italic',
};

export const EN = () => italic({ text: 'Hello world' });

export const RU = () => italic(
  {
    lang: 'ru',
    text: 'Привет, мир',
  },
);
