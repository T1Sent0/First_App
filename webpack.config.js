const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const scss = require('./webpack_conf/sass');
const css = require('./webpack_conf/css');
const uglifyJs = require('./webpack_conf/js.uglify');

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
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // })
    ]
};

module.exports = function (env) {
    if(env === 'production') {
        return WebpackMerge([
            common,
            css(),
            scss(),
            uglifyJs()
        ])
    }
    if(env === 'development') {
        return WebpackMerge([
            common,
            css(),
            scss()
        ])
    }
};