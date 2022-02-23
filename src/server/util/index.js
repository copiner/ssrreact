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
      <meta name="viewport" content="initial-scale=1, width=device-width" />
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
