const nodeExternals = require('webpack-node-externals');
// 服务端webpack打包入口
let path = require('path');
module.exports = {
  target: 'node',
  mode: 'production',
  externals:[nodeExternals()],
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    // filename: './js/[name].[contenthash].js',
    // chunkFilename: './js/[name].[contenthash].js',
    //publicPath: './'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: '/node_modules/',
            use: {
                loader: "babel-loader"
            }
      }
    ]
  }
}
