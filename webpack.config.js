const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    mode: "development",
    output: {
        filename: "./main.js"
    },
    module: {
        rules:
            [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader']
            }],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello World',
            buildTime: new Date().toISOString(),
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
    ],

    devServer: {
        open: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    }
}
