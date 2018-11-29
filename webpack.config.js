var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");

var browserConfig = {
  entry: "./client/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(jsx?)$/, use: "babel-loader" },
      { test: /\.(css?)$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
};

var serverConfig = {
  entry: "./server/app.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "server.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(jsx?)$/, use: "babel-loader" },
      { test: /\.(css?)$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
};

module.exports = [browserConfig, serverConfig];
