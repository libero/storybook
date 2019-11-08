import image from './images/attention.svg';
import infoBar from './info-bar.twig';
import './info-bar.scss';

export default {
  title: 'Molecules|InfoBar',
};

export const attention = () => infoBar(
  {
    type: 'attention',
    image: {
      src: image,
      alt: 'test',
    },
    content: 'Please complete the outstanding tasks.',
  },
);
