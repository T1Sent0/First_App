const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const scss = require('./webpack_conf/sass');

const PATHS = {
    development: path.join(__dirname, 'Development/Component/App'),
    production: path.join(__dirname, 'Production')
};

const common = {
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

module.exports = function (env) {
    if(env === 'production') {
        return WebpackMerge([
            common,
            scss()
        ])
    }
    if(env === 'development') {
        return WebpackMerge([
            common,
            scss()
        ])
    }
};