const webpack = require("webpack");
const path = require("path");
const webpackLiveReload = require("webpack-livereload-plugin");
const package = require("./package.json");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "./dist/index.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    externals: {
        "@tripetto/forms": "Tripetto"
    },
    plugins: [
        new webpack.DefinePlugin({
            PACKAGE_NAME: JSON.stringify(package.name),
            PACKAGE_VERSION: JSON.stringify(package.version)
        }),
        new webpackLiveReload({
            appendScriptTag: true
        })
    ]
};
