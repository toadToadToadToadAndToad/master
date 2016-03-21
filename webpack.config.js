var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    'babel-polyfill',
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    './app/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // loader: 'react-hot!babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  devServer: {
    contentBase: '/dist',
    hot: false,
  },
  plugins: [
    HTMLWebpackPluginConfig,
    // new webpack.HotModuleReplacementPlugin(),
  ],
};
