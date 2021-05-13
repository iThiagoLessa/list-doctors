const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "public",
  },
  devServer: {
    contentBase: "./public",
    port: 9000,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
  module: {
    rules: [{
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },{
          test: /\.css$/i,
          use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
          ]
      }],
  },
};
