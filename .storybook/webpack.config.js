var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$/,
      threshold: 1000, // 10240
      minRatio: 0.8
    })
  ],
  module: {
    rules: [
    ]
  }
};
