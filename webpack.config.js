var path = require('path');
//eslint-disable-next-line no-unused-vars
var webpack = require('webpack');

//eslint-disable-next-line no-unused-vars
var HtmlWebpackPlugin = require('html-webpack-plugin');

//eslint-disable-next-line no-unused-vars
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: [    
        './public/javascripts/angularApp' 
    ],
    target: 'web',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'http://localhost:3000/',
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({ inject: 'head',
            template: __dirname + '/public/index.tmpl.html'})
    ], 
    module: {
        loaders: [
            { test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader'},
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap'
            },
            {
                test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/, 
                loader: 'url?limit=100000&name=img/[name].[ext]'
            },
            {
                test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/, 
                loader: 'url?limit=100000&name=fonts/[name].[ext]'
            }  
        ]
    }
};