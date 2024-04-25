const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
console.log(htmlWebpackPlugin)
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
        filename: '[name].[hash].js'
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                use: 'babel',
                use: [
                  {
                    loader: 'babel'
                  }
                  //or
                  'babel'
                ],*/
                exclude: /node_modules/
            },

            {
                test: /\.vue$/,
                loader: 'vue',
                options: {
                    loaders:{
                        css: extractTextPlugin.extract({
                            fallback: 'vue-style-loader',
                            use: 'css-loader'
                        })
                    }
                }
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
    stats: {
        maxModules: 0,
        // chunks:false,
        // modules: false,
        // chunkModules: false,
        children: false
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new extractTextPlugin({
            filename: 'style.[hash].css',
            allChunks: true
        }),
        new htmlWebpackPlugin({
            title:'SPA',
            template:'template/index.template.html',
            filename: 'index_bundle.html'
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
