import content from './content-meta.twig';
import './content-meta.scss';

export default {
  title: 'Molecules|ContentMeta',
};

export const Basic = () => content(
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
