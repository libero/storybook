/* eslint-disable max-len */

import pageGrid from './page-grid.twig';
import { contentGrid } from '../../includes';
import './page-grid.scss';

export default {
  title: 'Templates|Page grid',
};

export const all = () => pageGrid(
  {
    start: contentGrid(
      {
        content: [
          {
            area: 'full',
            content: 'full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full',
          },
          {
            area: 'main',
            content: 'main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main',
          },
        ],
      },
    ),

    main: contentGrid(
      {
        content: [
          {
            area: 'full',
            content: 'full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full',
          },
          {
            area: 'primary',
            content: 'primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary primary',
          },
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
            area: 'main',
            content: 'main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main',
          },
        ],
      },
    ),

    end: contentGrid(
      {
        content: [
          {
            area: 'main',
            content: 'main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main',
          },
          {
            area: 'full',
            content: 'full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full',
          },
        ],
      },
    ),
  },
);
