export const handleHtml = ({ reactStr, initialData, styles }) => {


  let jsValues = [];
  let cssValues = [];

  if (__isDev) {
    jsValues = ['main.js'];
    cssValues = ['main.css'];

  } else {
    const mainfest = require('../../../dist/mainfest.json');
    const jsKeys = ['libs.js', 'main.js'];
    const cssKeys = ['main.css'];
    
    jsValues = jsKeys.map(v => mainfest[v]);
    cssValues = cssKeys.map(v => mainfest[v]);
  }

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8"/>
      <title></title>
      <style>${styles}</style>
      ${cssValues.map(v => `<link rel="stylesheet" href="${v}"></link>`).join('')}
  </head>
  <body>
      <div id="root">${reactStr}</div>
      <script>window._context=${initialData}</script>
  </body>
  ${jsValues.map(v => `<script type="text/javascript" src="${v}"></script>`).join('')}
  </html>`
};

export const getStaticRoute = async (asyncRoute) => {
  const staitcRoute = [];
  const len = asyncRoute.length;

  for (let i = 0; i < len; i++) {
    const item = asyncRoute[i];
    staitcRoute.push({
      ...item
    });
    if (item.component._load) {
      const component = (await item.component._load()).default;
      staitcRoute[staitcRoute.length - 1].component = component;
    }
  };

  return staitcRoute;
};
