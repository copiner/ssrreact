const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
          },
          {
                test: /\.css$/,
                exclude: '/node_modules/',
                use: [
                    { loader: MiniCssExtractPlugin.loader },
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
    plugins: [new MiniCssExtractPlugin()]
}
