const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: ['./src/main.js'],
        vendor: [
            'lodash',
            'axios',
            'vue',
            'vue-router'
        ]
    },
    output: {
        path: path.resolve(__dirname , '../dist'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
           
            {
                test: /\.js$/,
                use: 'babel',
                exclude: /node_modules/
            },
           
            {
                test: /\.vue$/,
                loader: 'vue'
            },
           
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                options: {
                    limit: 8192
                }
            }
        ]
    },
    
    performance: {
        hints: false
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    resolve: {
       
        extensions: ['.js', '.vue'],
     
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            components: path.join(__dirname, './src/components')
        }
    }
}
