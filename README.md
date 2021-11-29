# react-ssr
一个react ssr示例

renderToString()

renderToStaticMarkup()

renderToNodeStream()

renderToStaticNodeStream()


ReactDOM.hydrate()


同构


react-router-config提供matchRoutes可以通过传入path和路由配置数组，查找到组件。获取到组件后，判断组件是否存在静态方法loadData，若有则请求获取数据。

在通过StaticRouter的context传递数据。那么，服务器就获取到了数据，同时服务器直出组件携带了数据。
服务器在直出组件的同时，还要将数据传递给客户端，这个过程称之为注水
