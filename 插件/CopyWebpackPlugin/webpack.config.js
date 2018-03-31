const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/1.jpg'
        }])
    ]
}