'use strict'
const exec = require('child_process').execSync
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
// const OfflinePlugin = require('offline-plugin')
const base = require('./webpack.base')
const config = require('./config')

process.env.NODE_ENV = 'production'
if (!process.env.REACT_WEBPACK_ENV) {
    process.env.REACT_WEBPACK_ENV = 'dist'
}

exec(`rm -rf ${_.currentApp}/dist/`)

base.devtool = 'cheap-source-mapp'
base.module.loaders.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
},{
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
})

// a white list to add dependencies to vendor chunk
base.entry.vendor = config.vendor
// use hash filename to support long-term caching
base.output.filename = '[name].[chunkhash:8].js'
// add webpack plugins
base.plugins.push(
  new ProgressPlugin(),
  new ExtractTextPlugin('[name].[contenthash:8].css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }),
  // extract vendor chunks
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.[chunkhash:8].js'
  })
  // progressive web app
  // it uses the publicPath in webpack config
  // new OfflinePlugin({
  //   relativePaths: false,
  //   AppCache: false,
  //   ServiceWorker: {
  //     events: true
  //   }
  // })
)

// minimize webpack output
base.stats = {
  // Add children information
  children: false,
  // Add chunk information (setting this to `false` allows for a less verbose output)
  chunks: false,
  // Add built modules information to chunk information
  chunkModules: false,
  chunkOrigins: false,
  modules: false
}

module.exports = base
