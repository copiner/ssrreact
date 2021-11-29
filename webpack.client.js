// 客户端webpack打包入口
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
let path = require('path');

module.exports = merge(base, {
    // target: 'web',
    entry: './src/client/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './public')
    },
    // optimization: {
    //     splitChunks: {
    //       cacheGroups: {
    //         libs: {
    //           test: /node_modules/,
    //           chunks: 'initial',
    //           name: 'libs'
    //         }
    //       }
    //     }
    // },
    // plugins: [
    //     new Webpack.DefinePlugin({
    //      'process.env': env
    //     }),
    // ]
});
