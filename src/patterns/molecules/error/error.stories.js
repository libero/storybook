import error from './error.twig';
import '../heading/heading.scss';

export default {
  title: 'Molecules|Error',
};

export const Basic = () => error(
  {
    heading:
      {
        level: 2,
        text: 'Error',
      },
  },
);
