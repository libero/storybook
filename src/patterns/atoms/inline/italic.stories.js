import italic from './italic.twig';

export default {
    title: 'Atoms|Inline/Italic',
};

export const English = () => italic({text: 'Hello world.'});

export const Russian = () => italic(
  {
      attributes: {
          lang: 'ru'
      },
      text: 'Привет, мир'
  }
);
