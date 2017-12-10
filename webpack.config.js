const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSCSS = new ExtractTextPlugin({
  filename: '.dist/css/ikan.css',
})

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSCSS.extract({
         use: [{
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }],
      fallback: "style-loader"
      })
    }]
  },
  plugins: [
    extractSCSS
  ]
};