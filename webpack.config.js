const webpack = require("webpack");
const webpackLiveReload = require("webpack-livereload-plugin");
const path = require("path");
const package = require("./package.json");
const externals = require("webpack-node-externals");

const config = (type, target) => {
    return {
        entry: `./src/${type}/index.ts`,
        output: {
            filename: "index.js",
            path: path.resolve(__dirname, type, target || ""),
            libraryTarget: (type === "runner" && "umd") || undefined,
            library:
                (type === "runner" && JSON.stringify(package.name)) || undefined
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                    options: {
                        compilerOptions: {
                            noEmit: false,
                            declaration: type === "runner",
                            target: target === "es6" ? "ES6" : "ES5",
                            module: target === "es6" ? "es6" : "commonjs",
                            outDir: `./${type}${target ? "/" + target : ""}`
                        },
                        configFile: type === "runner" ? "tsconfig.runner.json" : "tsconfig.json"
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
            type === "builder" && !target
                ? {
                      tripetto: "Tripetto"
                  }
                : [externals()],
        plugins: [
            new webpack.DefinePlugin({
                PACKAGE_NAME: JSON.stringify(package.name),
                PACKAGE_VERSION: JSON.stringify(package.version)
            }),
            ...(type === "builder" && !target
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
        config("builder"),
        ...(argv.mode === "production"
            ? [
                  config("builder", "es5"),
                  config("builder", "es6"),
                  config("runner"),
                  config("runner", "es5"),
                  config("runner", "es6")
              ]
            : [])
    ];
};
