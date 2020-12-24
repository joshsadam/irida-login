const path = require("path");

module.exports = {
  entry: { main: path.resolve(__dirname, "src", "index.js") },
  output: { path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
