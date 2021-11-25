// 客户端webpack打包入口
let path = require('path');
module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/client/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './public'),
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
