// 客户端入口
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import El from './container';
import { Provider } from 'react-redux';
import { getClientStore } from './store/store';

// let store = getClientStore();

const App = () => {
  return (
      <BrowserRouter>
        <El />
      </BrowserRouter>
  )
}
// ssr render要用hydreate替换，注水
ReactDom.hydrate(//注水
  <App />,
  document.getElementById('root')
)
