import React from 'react'
import asyncComp from '../util/'
//asyncComp(() => import('../container/apple'))

import Apple from '../component/apple'
import Header from '../container/header'
import Peach from '../container/peach'
import Counter from '../component/counter'

const routes = [
    {
        path: '/',
        element: <Header />
    },
    {
        path: '/peach',
        element:<Peach />,
        children: [
          {
              path: '/peach/apple',
              element:<Apple />
          }
        ]
    },
    {
        path: '/counter',
        element:<Counter />,
    }
]
export default routes
