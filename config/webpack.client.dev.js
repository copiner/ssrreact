// 客户端webpack打包入口
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let path = require('path');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/client/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '../dist/client')
    },
    devtool: 'eval-source-map',
    module: {
    rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
        },
        {
              test: /\.css$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: MiniCssExtractPlugin.loader
                  },
                  {
                      loader: 'css-loader',
                      options: {
                          modules: true
                      }
                  },
                  {   loader: 'postcss-loader' }
              ]
          }
      ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new Webpack.DefinePlugin({
          '__isServer': false,
          '__isDev': true
        })
    ]
}
