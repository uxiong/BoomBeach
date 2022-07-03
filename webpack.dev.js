const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      publicPath: './dist',      
    },
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
});