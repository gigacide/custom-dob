const webpack = require("webpack");
const webpackTerser = require("terser-webpack-plugin");
const webpackShell = require("webpack-shell-plugin-next");
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
            libraryTarget: !target || target === "umd" ? "umd" : "commonjs2",
            library:
                ((!target || target === "umd") &&
                    (package.name + ((type === "builder" && "-builder") || ""))
                        .split("-")
                        .map((s) => s.charAt(0).toUpperCase() + s.substr(1))
                        .join("")) ||
                undefined,
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
                            outDir: `./${type}${target ? "/" + target : ""}`,
                        },
                        configFile:
                            type === "runner"
                                ? "tsconfig.runner.json"
                                : "tsconfig.json",
                    },
                },
                {
                    test: /\.svg$/,
                    use: [
                        "url-loader",
                        "image-webpack-loader?{svgo:{plugins:[{cleanupAttrs: true},{removeDoctype: true},{removeXMLProcInst: true},{removeComments: true},{removeMetadata: true},{removeTitle: true},{removeDesc:{removeAny: true}}]}}",
                    ],
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        externals:
            target === "umd" || (type === "builder" && !target)
                ? {
                      tripetto: "Tripetto",
                      "tripetto-runner-foundation": "TripettoRunner",
                  }
                : [externals()],
        optimization: {
            minimizer: [
                new webpackTerser({
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
                new webpack.BannerPlugin(
                    `${package.title} ${
                        package.version
                    } - Copyright (C) ${new Date().getFullYear()} Tripetto B.V. - All Rights Reserved`
                ),
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                PACKAGE_NAME: JSON.stringify(package.name),
                PACKAGE_VERSION: JSON.stringify(package.version),
            }),
            ...(type === "builder" && !target
                ? [
                      new webpackShell({
                          onBuildStart: {
                              scripts: ["npm run make:po2json"],
                              blocking: true,
                              parallel: false,
                          },
                          onBuildEnd: {
                              scripts: ["npm run pot"],
                              blocking: false,
                              parallel: true,
                          },
                          dev: false,
                      }),
                      new webpackLiveReload({
                          appendScriptTag: true,
                      }),
                  ]
                : []),
        ],
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
                  config("runner", "es6"),
              ]
            : []),
    ];
};
