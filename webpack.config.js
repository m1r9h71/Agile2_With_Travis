var path = require('path');
//eslint-disable-next-line no-unused-vars
var webpack = require('webpack');

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
    module: {
        loaders: [
            { test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader'}
        ]
    }
};