const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "/",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        // {
        //   from: path.resolve(__dirname, "src/index.html"),
        //   to: path.resolve(__dirname, "dist/index.html"),
        // },
        {
          from: path.resolve(__dirname, "src/imgs"),
          to: path.resolve(__dirname, "dist/imgs"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, "dist"),
    // },
    historyApiFallback: true,
    compress: true,
    port: 1010,
  },
};
