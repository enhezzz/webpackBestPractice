const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
        })
    ]
}