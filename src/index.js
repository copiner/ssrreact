// 客户端入口
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import App from './container';
import { Provider } from 'react-redux';
import { getClientStore } from './store';

let store = getClientStore();

// ssr render要用hydreate替换，注水
ReactDom.hydrate(//注水
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./container', () => {
      ReactDom.hydrate(//注水
          <Provider store={store}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
          </Provider>,
          document.getElementById('root')
      )
  })
}
