const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js', // точка входа
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(), // Очищает директорию dist
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/pages/about.html',
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};