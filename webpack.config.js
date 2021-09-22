const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.pug",
      favicon: "./favicon.ico",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader",
          },
        ],
      },
    ],
  },
};
