import { redirect } from 'react-router-dom';

import { Home, List, Root } from '@/pages';

export const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'list',
        element: <List />,
      },
    ],
  },
];
