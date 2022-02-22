import React from 'react';
import asyncComp from '../util/';
//asyncComp(() => import('../container/apple'))

import Apple from '../component/apple';
import Header from '../component/header';
import Peach from '../component/peach';

const routes = [
    {
        path: '/',
        element: <Header />,
        children: [
          {
              path: '/apple',
              element:<Apple />
          }
        ]
    },
    {
        path: '/peach',
        element:<Peach />,
    }
]
export default routes
