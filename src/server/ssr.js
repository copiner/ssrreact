import React from 'react'
import { renderToString, renderToNodeStream/*todo*/ } from 'react-dom/server'
import { StaticRouter, Switch } from 'react-router'
import routes from '../routes';
import { Provider } from 'react-redux';
import { getStore } from '../store/store';

import { matchRoutes, renderRoutes } from 'react-router-config'
// import { handleHtml, getStaticRoute } from './util';

const store = getStore();

export default async (req, res, next) => {
    const { path, url } = req;
    //第一个路由，这里拉取数据，直接渲染，
    //组件有load静态方法，就在server端获取数据，直接显示
    let matchRet = matchRoutes(routes, path);

    let promises = [];
    matchRet.forEach(item => {
        if (item.route.loadData) {
          let promise = new Promise((resolve, reject) => {
            item.route.loadData(store).then(resolve, reject).catch(reject)
          })
          promises.push(promise)
        }
    })

    //服务器直出组件的时候，需要完成请求，携带数据,
    //浏览器接管页面的时候，利用数据渲染组件
    await Promise.all(promises)

    let context = {css:[]};
    let reactStr = renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </StaticRouter>
      </Provider>
    )



    //在服务端注入数据，构建出组件树,序列化成 HTML
    const ssrStr=context.css.length ? context.css.join('\n'): '';
    res.send(`<!DOCTYPE html>
      <html>
        <head>
          <title>kkbsssr</title>
          <style>${ssrStr}</style>
        </head>
        <body>
          <div id="root">${reactStr}</div>
          <script>window._context=${JSON.stringify(store.getState())}</script>
          <script src="/main.js"></script>
        </body>
      </html>
    `)


    return next()
}
