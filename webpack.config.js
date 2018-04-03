const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },

  devtool: "inline-source-map",

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],

<<<<<<< HEAD
  devServer: {
    contentBase: "./dist"
=======
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  resolve: {
    alias: {
      containers: path.resolve(__dirname, 'src/containers'),
      components: path.resolve(__dirname, 'src/components'),
    },
>>>>>>> 0c272f5... Added simple input field to handle searches
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
