/* eslint-disable max-len */

import contentGrid from './contentGrid.twig';

export default {
  title: 'Templates|Content grid',
};

export const primaryOnly = () => contentGrid(
  {
    content: [
      {
        area: 'primary',
        content: 'primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary',
      },
    ],
  },
);

export const primaryWithMenu = () => contentGrid(
  {
    content: [
      {
        area: 'menu',
        content: 'menu menu menu menu menu menu menu menu menu menu menu menu menu menu',
      },
      {
        area: 'primary',
        content: 'primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary',
      },
    ],
  },
);

export const primaryAndSecondary = () => contentGrid(
  {
    content: [
      {
        area: 'primary',
        content: 'primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary',
      },
      {
        area: 'secondary',
        content: 'secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary',
      },
    ],
  },
);

export const all = () => contentGrid(
  {
    content: [
      {
        area: 'menu',
        content: 'menu menu menu menu menu menu menu menu menu menu menu menu menu menu',
      },
      {
        area: 'primary',
        content: 'primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary',
      },
      {
        area: 'secondary',
        content: 'secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary secondary',
      },
      {
        area: 'full',
        content: 'full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full',
      },
      {
        area: 'main',
        content: 'main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main',
      },
    ],
  }
);
