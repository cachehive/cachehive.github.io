const debug = process.env.NODE_ENV !== "production";
const path = require('path');
const webpack = require('webpack');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname ,
  devtool: debug ? "inline-sourcemap" : null,
  entry: [ 
    './js/app.jsx',
//    './css/bundle.less',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_componenets)/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', 'stage-0' ],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
//      {
//        test: /\.css$/,
//        use: [
//          'style-loader',
//          'css-loader?importLoaders=1',
//          'postcss-loader'
//        ]
//      }
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "app.min.js"
  },
  plugins: debug ? [
//    new HtmlWebpackPlugin(),
//    new ExtractTextPlugin("styles.css"),
  ] : [
//    new HtmlWebpackPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};