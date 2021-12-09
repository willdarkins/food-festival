//import statements for webpack, Bundle Analyzer plug-in and Path
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const webpack = require("webpack");
const path = require("path");

//create the main configuration object within our file to write options within this object that tell webpack what to do
module.exports = {
    //the entry point is the root of the bundle and the beginning of the dependency graph
    entry: './assets/js/script.js',
    //outputted bundled code sent to newly created dist directory
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    //plugins play an important role in directing webpack what to do
    plugins:[
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