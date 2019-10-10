import heading from './heading.twig';
import './heading.scss';

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

export const h3 = () => heading(
  {
    level: 3,
    text: 'A level 3 heading',
  },
);

export const h4 = () => heading(
  {
    level: 4,
    text: 'A level 4 heading',
  },
);

export const h5 = () => heading(
  {
    level: 5,
    text: 'A level 5 heading',
  },
);

export const h6 = () => heading(
  {
    level: 6,
    text: 'A level 6 heading',
  },
);

export const h1Linked = () => heading(
  {
    level: 1,
    text: {
      text: 'Linked heading',
      attributes: {
        href: '#',
      },
    },
  },
);
