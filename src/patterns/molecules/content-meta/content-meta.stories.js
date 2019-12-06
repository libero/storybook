import content from './content-meta.twig';
import './content-meta.scss';

export default {
  title: 'Molecules|Content meta',
  parameters: {
    centered: {
      disable: true,
    },
  },
};

export const Meta = () => content(
  {
    items: [
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'red',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'orange',
          },

      },
      {
        content:
          {
            text: 'yellow',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'green',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'blue',
          },

      },
      {
        content:
          {
            text: 'indigo',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'violet',
          },

      },
    ],
  },
);

export const MetaAr = () => content(
  {
    attributes: {
      dir: 'rtl',
      lang: 'ar',
    },
    items: [
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'أحمر',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'برتقالي',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'أصفر',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'أخضر',
          },

      },
      {
        content:
          {
            text: 'أزرق',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'نيلي',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'بنفسجي',
          },

      },
    ],
  },
);

export const MetaJa = () => content(
  {
    attributes: {
      lang: 'ja',
    },
    items: [
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: '赤',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: 'オレンジ',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: '黄色',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: '緑',
          },

      },
      {
        content:
          {
            text: '水色',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: '青',
          },

      },
      {
        content:
          {
            attributes: {
              href: '#',
            },
            text: '紫',
          },

      },
    ],
  },
);
