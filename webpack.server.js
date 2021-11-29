// 服务端webpack打包入口
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const base = require('./webpack.base');
let path = require('path');

module.exports = merge(base, {
    target: 'node',
    externals:[nodeExternals()],
    entry: './src/server/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './build')
    }
});
