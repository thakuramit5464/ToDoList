const path = require("path");
var nodeEnv = process.env.NODE_ENV || "development";
var isDev = nodeEnv !== "production";
const CopyPlugin = require("copy-webpack-plugin");

var config = {
  mode: "development",
  watch: true,
  entry: {
    dist: "./todoList.js",
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "todoList.js",
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
      ".json",
      ".css",
      ".sh",
      ".babelrc",
      ".eslintignore",
      ".gitignore",
      ".d",
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./index.html", to: "./" },
        { from: "./index.css", to: "./" },
        { from: "./assets", to: "./assets" },
        { from: "./manifest.json", to: "./" },
        { from: "./sw.js", to: "./" },
      ],
    }),
  ],
};

if (isDev) {
  config.devtool = "inline-source-map";
}

module.exports = config;
