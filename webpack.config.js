const webpack = require("webpack");
const webpackLiveReload = require("webpack-livereload-plugin");
const path = require("path");
const package = require("./package.json");
const externals = require("webpack-node-externals");

const config = type => {
    return {
        entry:
            type === "collector"
                ? "./src/collector/index.ts"
                : "./src/index.ts",
        output:
            type === "collector"
                ? {
                      filename: "index.js",
                      path: path.resolve(__dirname, "collector"),
                      libraryTarget: "umd",
                      library: JSON.stringify(package.name)
                  }
                : {
                      filename: type === "umd" ? "umd.js" : type === "collector" ? "index.js" : "main.js",
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
                        },
                        configFile: type === "collector" ? "tsconfig.collector.json" : "tsconfig.json"
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
        externals:
            type === "umd"
                ? {
                      tripetto: "Tripetto"
                  }
                : [externals()],
        plugins: [
            new webpack.DefinePlugin({
                PACKAGE_NAME: JSON.stringify(package.name),
                PACKAGE_VERSION: JSON.stringify(package.version)
            }),
            ...(type === "umd"
                ? [
                      new webpackLiveReload({
                          appendScriptTag: true
                      })
                  ]
                : [])
        ]
    };
};

module.exports = (env, argv) => {
    return [
        config("umd"),
        ...(argv.mode === "production"
            ? [config("module"), config("collector")]
            : [])
    ];
};
