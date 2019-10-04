import heading from './heading.twig';

export default {
  title: 'Molecules|Heading',
};

export const h1 = () => heading(
  {
    level: 1,
    text: 'A level 1 heading',
  },
);

export const h2 = () => heading(
  {
    level: 2,
    text: 'A level 2 heading',
  },
);

export const h2Linked = () => heading(
  {
    level: 2,
    text: {
      text: 'A linked H2 heading',
      attributes: {
        href: '#',
      },
    },
  },
);
