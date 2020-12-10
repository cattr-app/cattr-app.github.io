const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgeCssWebpackPlugin = require("purgecss-webpack-plugin");
const fs = require("fs");
const glob = require("glob");

module.exports = {
  target: "web",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    build: path.resolve(__dirname, "src", "js", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: 'bundle.js'
  },
  watchOptions: {
    ignored: [
      path.resolve(__dirname, "build", "**"),
      path.resolve(__dirname, "node_modules", "**")
    ]
  },
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, "src", "js"),
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, "src", "sass"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: process.env.NODE_ENV === "development"
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]-[hash].[ext]",
              outputPath: "resources"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]-[hash].[ext]",
              outputPath: "fonts"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src", "static"),
        to: "."
      }
    ]),
    new MiniCssExtractPlugin({
      filename: path.join("css", "main.css")
    }),
  ]
};

if (module.exports.mode === "production") {

  module.exports.plugins.push(new PurgeCssWebpackPlugin({ paths: glob.sync(path.resolve(__dirname, 'src', '**', '*'), { nodir: true }) }));

}
