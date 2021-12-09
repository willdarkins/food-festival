//import statements for webpack, Bundle Analyzer plug-in and Path
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

const webpack = require("webpack");
const path = require("path");

//create the main configuration object within our file to write options within this object that tell webpack what to do
module.exports = {
  //the entry point is the root of the bundle and the beginning of the dependency graph
  entry: {
    app: './assets/js/script.js',
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js"
  },
  //outputted bundled code sent to newly created dist directory
  //name of each attribute in the entry object will be used in place of [name] in each bundle.js file that is created.
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  //Configure our webpack config object to use the file-loader
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  //plugins play an important role in directing webpack what to do
  plugins: [
    //plug-in property to support jquery
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    //plug-in property to support Bundle Analyzer
    new BundleAnalyzerPlugin({
      // the report outputs to an HTML file in the dist folder and loads on 'npm run build' command
      analyzerMode: "static",
    })
  ],
  //provide the mode in which we want webpack to run
  mode: 'development'
}