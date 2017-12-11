const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSCSS = new ExtractTextPlugin({
  filename: './css/ikan.css',
})

// const ikanJS = new webpack.optimize.CommonsChunkPlugin({
//   name: 'ikan',
//   filename: './js/ikan.js',
// });

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/ikan.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      },

    ]
  },
  plugins: [
    extractSCSS
  ]
};