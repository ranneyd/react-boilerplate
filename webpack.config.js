const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'build/'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test:   /\.jsx?/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src/'),
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Boilerplate',
        template: path.join(__dirname, 'src/index.ejs')
    })],
    devServer: {
        hot: true,
    },
    watchOptions: {
        poll: true
    },
    devtool: 'sourcemap',
};