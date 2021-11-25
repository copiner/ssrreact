import React from 'react';
import Index from '../container';
import Login from '../container/login';
import App from '../app';

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
          }
      ]
  }
]
