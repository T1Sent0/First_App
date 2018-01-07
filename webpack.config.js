const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    development: path.join(__dirname, 'Development/Component/App'),
    production: path.join(__dirname, 'Production')
};

module.exports = {
    entry: PATHS.development + '/App.js',
    output: {
        filename: '[name].js',
        path: PATHS.production + '/js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            filename: PATHS.production + '/html/index.html'
        })
    ]
};