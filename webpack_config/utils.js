'use strict'
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')
const _ = module.exports = {}
let argv = require('minimist')(process.argv.slice(2))
if (!argv.app && process.env.REACT_APP) {
    _.currentApp = process.env.REACT_APP
} else {
    _.currentApp = argv.app
    process.env.REACT_APP = argv.app
}


_.cwd = (file) => {
    return path.join(process.cwd(), file || '')
}

_.outputPath = _.cwd(`${_.currentApp}/dist`)

_.outputIndexPath = _.cwd(`${_.currentApp}/dist/index.html`)

_.target = 'web'

_.loadersOptions = () => {
    const isProd = process.env.NODE_ENV === 'production'

    return {
        minimize: isProd,
        options: {
            context: _.cwd(_.currentApp),
            babel: config.babel
        }
    }
}
