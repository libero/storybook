import link from './link.twig';

export default {
  title: 'Atoms|Inline/Link',
};

export const Basic = () => link(
  {
    attributes: {
      href: '#',
    },
    text: 'A link',
  },
);
