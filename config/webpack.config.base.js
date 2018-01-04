const path = require('path');
const webpack = require("webpack");

var rootPath = process.cwd();

module.exports = {
  context: rootPath + '/app',
  entry: {
    app: './main.js',
    // vendor: ['angular','@uirouter/angularjs']

  },
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader", // or "babel" because webpack adds the '-loader' automatically
      query: {
        presets: ['es2015']
      },
      // "include" is commonly used to match the directories
      include: [
        path.resolve(rootPath, "app/"),
        // path.resolve(rootPath, "app/test")
      ]
    }]
  },
  resolve: {
    modules: [
      path.join(rootPath, "node_modules")
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",
    //   filename: "vendor.bundle.js"
    // })
  ],
  stats: {
    colors: true
  }
};