const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hiu-ui-min.css'
  },
  module: {
    rules: []
  },
  plugins: []
};