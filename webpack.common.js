const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devServer: {
    compress: true,
    host: '0.0.0.0',
    port: 3300,
  },

  resolve: {
    // Add '.ts' and '.js' as resolvable extensions.
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [{
        loader: 'ts-loader',
      }],
    }, { // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    }],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {

  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: 'bundle.[contenthash:6].js',
    path: path.resolve(__dirname, 'dist'),
  },

  optimization: {
    splitChunks: {
      // chunks: 'all',
      // maxSize: 2222222,
    },
  },
};