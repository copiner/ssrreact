import React from 'react'
import { renderToString, renderToNodeStream/*todo*/ } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route, useRoutes } from "react-router-dom";
import App from '../container';
import routes from '../routes';
import { Provider } from 'react-redux';
import { getStore } from '../store';

import { handleHtml, getStaticRoute } from './util';

const store = getStore();

export default async (req, res, next) => {
    const { path, url } = req;

    if (url.indexOf('.') > -1) {
        res.end();
        return;
    }

    const context = {};

    let reactStr = renderToString(
        <Provider store={store}>
            <StaticRouter location={url} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    )

    const htmlInfo = {
      reactStr,
      initialData:JSON.stringify(store.getState()),
    };
    //在服务端注入数据，构建出组件树,序列化成 HTML
    const html = handleHtml(htmlInfo);

    if (context.url) {
      res.writeHead(302, {
        Location: context.url
      });
    } else {
      res.write(html);
    }

    res.end();
}
