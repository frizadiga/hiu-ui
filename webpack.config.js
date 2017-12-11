const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSCSS = new ExtractTextPlugin({
  filename: '.dist/css/ikan.css',
})

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSCSS.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      })
    }]
  },
  plugins: [
    extractSCSS
  ]
};