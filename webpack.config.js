//import statements for webpack, Bundle Analyzer, PwaManifest and plug-in and Path
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const WebpackPwaManifest = require("webpack-pwa-manifest");
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
        test: /\.jpg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name(file) {
                return '[path][name].[ext]';
              },
              publicPath: function(url) {
                return url.replace('../', '/assets/');
              }
            }
          },
          {
            loader: 'image-webpack-loader'
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
    }),
    new WebpackPwaManifest({
      name: "Food Event",
      short_name: "Foodies",
      description: "An app that allows you to view upcoming food events.",
      start_url: "../index.html",
      background_color: "#01579b",
      theme_color: "#ffffff",
      fingerprints: false,
      inject: false,
      icons: [{
        src: path.resolve("assets/img/icons/icon-512x512.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join("assets", "icons")
      }]
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: 8080,
  },
  //provide the mode in which we want webpack to run
  mode: 'development'
}