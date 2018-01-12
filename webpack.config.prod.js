var webpack = require("webpack");
var path = require("path");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
var CompressionPlugin = require("compression-webpack-plugin");
var buildPath = path.resolve(__dirname, "./build");
var nodeModulesPath = path.resolve(__dirname, "node_modules");

process.traceDeprecation = true;

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    __PRODUCTION__: true,
    "process.env.NODE_ENV": JSON.stringify("production")
  }),
  new webpack.optimize.UglifyJsPlugin({
    include: /\.js$/,
    minimize: true,
    compress: {
      screw_ie8: true,
      warnings: false
    },
    comments: false
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$/,
    threshold: 10240, // 1000
    minRatio: 0.8
  })
];

if (process.env.NODE_ENV_ANALYSE === "analyse") {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      analyzerPort: 8888,
      reportFilename: "report.html",
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: "stats.json",
      statsOptions: null
    })
  );
}

var config = {
  entry: [path.join(__dirname, "/src")],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals:{
    'react':'react',
    'react-redux':'react-redux',
  },
  //output config
  output: {
    filename: "index.js", //Name of output file
    chunkFilename: "components/[name].chunk.js",
    path: buildPath, //Path of output file
    libraryTarget: "umd",
    library: "redux-resize",
    umdNamedDefine: true
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [nodeModulesPath],
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            cacheDirectory: false,
            presets: [["react-app"]]
          }
        }
      },
    ]
  }
};

module.exports = config;
