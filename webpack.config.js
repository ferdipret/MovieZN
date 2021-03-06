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
      title: "Development",
      template: "./src/index.html",
      filedname: "./index.html"
    })
  ],

  devServer: {
    contentBase: "./dist"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      containers: path.resolve(__dirname, "src/containers/"),
      utils: path.resolve(__dirname, "src/utils/"),
      constants: path.resolve(__dirname, "src/constants/"),
      styles: path.resolve(__dirname, "src/styles/")
    }
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
