const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 如果预先定义过环境变量，就将其赋值给`ASSET_PATH`变量，否则赋值为根目录

const path = require('path')
module.exports = (env)=>{
    const ASSET_PATH = env.ASSET_PATH || '/';
console.log(env.ASSET_PATH)
    return{
    entry: './src/index.js',
    output: {
        publicPath: ASSET_PATH,
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        // 该插件帮助我们安心地使用环境变量
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'public path'
        })
    ]
}
};