'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const _ = require('./utils')
const config = require('./config')
module.exports = {
    entry: {
        client: _.cwd(_.currentApp + '/index.jsx')
    },
    output: {
        path: _.outputPath,
        filename: '[name].js',
        publicPath: config.publicPath
    },
    performance: {
        hints: process.env.NODE_ENV === 'production'
            ? 'warning'
            : false
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.css', '.json', '.scss'
        ],
        alias: {
            actions: `${config.srcPath}/actions/`,
            api: `${config.srcPath}/api/`,
            reducers: `${config.srcPath}/reducers/`,
            components: `${config.srcPath}/components/`,
            containers: `${config.srcPath}/containers/`,
            styles: `${config.srcPath}/styles/`,
            scss_vars: `${config.srcPath}/styles/vars.scss`,
            config: `${config.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
        },
        modules: [
            // places where to search for required modules
            _.cwd(''),
            _.cwd(`${_.currentApp}`),
            _.cwd('node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loaders: ['eslint-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/]
            }, {
                test: /\.(ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2|svg$)(\?.*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: config.title,
            template: _.cwd(_.currentApp + '/index.html'),
            filename: _.outputIndexPath
        }),
        new webpack.LoaderOptionsPlugin(_.loadersOptions()),
        new CopyWebpackPlugin([
            {
                from: `${config.srcPath}/static/images`,
                // to the root of dist path
                to: config.srcPath + '/dist'
            }
        ])
    ],
    target: _.target
}
