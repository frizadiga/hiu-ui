const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 1717,
    hot: true,
    open: false,
    openPage: '/',
    contentBase: [path.join(__dirname)],
    watchContentBase: true,
  },

});