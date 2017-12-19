const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


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
 
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src', 'js'),
        use: {
          loader:'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src', 'scss'),
        use: extractSCSS.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader',
        })
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'ex'),
        loader: 'raw-loader',
      },

    ]
  },
  plugins: [
    extractSCSS,
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './ex/app.html'
    })
  ]
};