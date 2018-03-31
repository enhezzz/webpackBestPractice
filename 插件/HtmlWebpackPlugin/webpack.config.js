var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'webpackHtmlPlugin'
  })]
};
module.exports = webpackConfig