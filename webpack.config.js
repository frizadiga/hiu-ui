const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    port: 1717,
    hot: true,
    open: false,
    openPage: '/',
    contentBase: [path.join(__dirname)],
    watchContentBase: true,
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
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },

    ]
  },
  plugins: [
    extractSCSS,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './examples/app.html'
    })
  ]
};