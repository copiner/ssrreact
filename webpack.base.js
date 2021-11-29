
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== "production";
let path = require('path');

module.exports = {
  mode: 'production',
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
    plugins: [new MiniCssExtractPlugin()]
}
