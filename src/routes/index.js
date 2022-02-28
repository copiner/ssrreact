import React,{ Suspense } from 'react'
//import { asyncComp } from '../util/'
//asyncComp(() => import('../container/apple'))

// const Peach = React.lazy(() => import('../container/peach'));

import Header from '../container/header'
import Peach from '../container/peach'
import Counter from '../component/counter'
import Apple from '../component/apple'
import Color from '../component/color'
import Favor from '../component/favor'
import Focus from '../component/focus'
import News from '../container/news'
import Auth from '../component/auth'
import Age from '../component/age'
import Scroll from '../component/scroll'

const routes = [
    {
        path: '/',
        name:"水果",
        element: <Header />
    },
    {
        path: '/peach',
        name:"桃子",
        // element:<Suspense fallback={<>...</>}><Peach /></Suspense>,
        element:<Peach />,
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
    },
    {
    	path:'/favor',
    	name:'偏爱',
    	element:<Favor />
    },
    {
    	path:'/focus',
    	name:'聚焦',
    	element:<Focus/>
    },
    {
    	path:'/news',
    	name:'新闻',
    	element:<News/>
    },
    {
	path:'/auth',
	name:'权限',
	element:<Auth/>
    },
    {
	path:'/age',
	name:'年龄',
	element:<Age/>
    },
    {
	path:'/scroll',
	name:'滚动',
	element:<Scroll/>
    }
]

export default routes
