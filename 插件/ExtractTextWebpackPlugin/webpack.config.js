const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path  = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        main: './src/index.js',
        another: './src/another.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js'
    },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
        allChunks: true,
        filename: '[name].css'
    }),
    new HtmlWebpackPlugin()
  ]
}