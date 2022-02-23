import React,{ Suspense } from 'react'
// import asyncComp from '../util/'
//asyncComp(() => import('../container/apple'))

const Peach = React.lazy(() => import('../container/peach'));

import Header from '../container/header'
// import Peach from '../container/peach'
import Counter from '../component/counter'
import Apple from '../component/apple'
import Color from '../component/color'

const routes = [
    {
        path: '/',
        name:"水果",
        element: <Header />
    },
    {
        path: '/peach',
        name:"桃子",
        element:<Suspense fallback={<>...</>}><Peach /></Suspense>,
        children: [
          {
              path: '/peach/:color',
              element:<Color />
          }
        ]
    },
    {
        path: '/counter',
        name:"计数",
        element:<Counter />,
    },
    {
        path: '/apple',
        name:"苹果",
        element:<Apple />
    }
]

export default routes
