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
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
      ],
    //provide the mode in which we want webpack to run
    mode: 'development'
}