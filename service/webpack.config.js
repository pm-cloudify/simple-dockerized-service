const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./index.js",
  target: "node16",
  mode: "production",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
  },
  devtool: "source-map",
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [],
  },
};
