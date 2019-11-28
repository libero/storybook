import error from './error.twig';
import '../heading/heading.scss';
import './error.scss';
import image from './images/5xx.svg';

export default {
  title: 'Molecules|Error',
  parameters: {
    centered: {
      disable: true,
    },
  },
};

export const ErrorEn = () => error(
  {
    heading:
      {
        level: 2,
        text: 'Error',
      },
  },
);

export const ErrorEnComplete = () => error(
  {
    image:
    {
      src: image,
      alt: 'Error',
    },

    heading:
      {
        level: 2,
        text: 'Error',

      },
    details:
      {
        text: 'Something has gone seriously wrong. We’ve logged the problem and will look into it.',
      },
  },
);

export const ErrorAr = () => error(
  {
    attributes:
      {
        'data-storybook-htmlattr-dir': 'rtl',
        'data-storybook-htmlattr-lang': 'ar',
      },
    image:
      {
        src: image,
        alt: 'Error',
      },
    heading:
      {
        level: 2,
        text: 'خطأ',
      },
    details:
      {
        text: ' لقد حدث خطأ ما بشكل خطير. لقد سجلنا المشكلة وسوف ننظر فيها.',
      },
  },
);

export const ErrorJa = () => error(
  {
    attributes:
      {
        lang: 'ja',
      },
    image:
      {
        src: image,
        alt: 'Error',
      },
    heading:
      {
        level: 2,
        text: 'エラー',
      },
    details:
      {
        text: '何かが深刻に間違っています。 問題を記録して調査します。',
      },
  },
);
