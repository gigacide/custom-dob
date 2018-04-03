const webpack = require("webpack");
const webpackLiveReload = require("webpack-livereload-plugin");
const path = require("path");
const package = require("./package.json");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    compilerOptions: {
                        noEmit: false
                    }
                }
            },
            {
                test: /\.svg$/,
                use: [
                    "url-loader",
                    "image-webpack-loader?{svgo:{plugins:[{cleanupAttrs: true},{removeDoctype: true},{removeXMLProcInst: true},{removeComments: true},{removeMetadata: true},{removeTitle: true},{removeDesc:{removeAny: true}}]}}"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    externals: {
        "@tripetto/forms-editor": "Tripetto"
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
