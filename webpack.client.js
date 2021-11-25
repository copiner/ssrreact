// 客户端webpack打包入口
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
          },
          {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: [
                    { loader: 'style-loader' },
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true
                      }
                    },
                    { loader: 'postcss-loader' }
                ]
            }
        ]
    },
    // plugins: [new MiniCssExtractPlugin()]
}
