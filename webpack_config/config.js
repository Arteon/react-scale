'use strict'
const path = require('path')
let argv = process.env.REACT_APP ? process.env.REACT_APP : require('minimist')(process.argv.slice(2)).app
module.exports = {
  port: 3000,
  context: path.resolve(process.cwd(), argv),
  title: 'React App',
  publicPath: '/',
  srcPath: path.join(process.cwd(), argv),
  // add these dependencies to a standalone vendor bundle
  vendor: [
    'react', 'react-dom', 'react-router', 'redux', 'react-router-redux', 'redux-thunk', 'semantic-ui-react', 'whatwg-fetch'
  ],
  // enable babelrc
  babel: {
    babelrc: true
  },
  cssModules: false
}
