import time from './time.twig';

export default {
  title: 'Atoms|Inline/Time',
};

export const Basic = () => time(
  {
    attributes: {
      datetime: '2010-04-05',
    },
    text: 'April 5, 2019',
  },
);