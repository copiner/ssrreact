import React from 'react';
import asyncComp from '../util/';

import Index from '../container';
import Login from '../container/login';
import Apple from '../component/apple';
import App from '../app';
//asyncComp(() => import('../container/apple'))
export default [
    {
        path: '/',
        component: App,
        routes: [
          {
              path: '/',
              component: Index,
              loadData: Index.load,
              exact: true,
              key: 'home',
          },
          {
              path: '/login',
              component: Login,
              exact: true,
              key: 'login'
          },
          {
              path: '/apple',
              component:Apple,
              name: 'apple',
              exact: true
          }
        ]
    }
]
