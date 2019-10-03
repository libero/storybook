import image from './image.twig';

export default {
  title: 'Atoms|Inline/Image',
};

export const Basic = () => image(
  {
    image: {
      src: 'https://picsum.photos/600/400',
      alt: '',
    },
  },
);
