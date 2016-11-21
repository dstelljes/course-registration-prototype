"use strict";

const path = require("path");
const webpack = require("webpack");

const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "application"),
  entry: {
    polyfills: "./polyfills",
    vendor: "./vendor",
    application: "./main"
  },
  module: {
    rules: [{
      loaders: [
        'awesome-typescript-loader'
      ],
      test: /\.ts$/
    }]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new CommonsChunkPlugin({
      name: ["polyfills", "vendor"].reverse()
    }),
    new ContextReplacementPlugin(
      // deals with use of System.import
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/
    ),
    new CopyPlugin([{
      from: path.resolve(__dirname, "assets"),
      to: path.resolve(__dirname, "build")
    }])
  ],
  resolve: {
    extensions: [".ts", ".js"]
  }
};
