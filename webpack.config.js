const webpack = require("webpack");
const webpackTerser = require("terser-webpack-plugin");
const webpackShell = require("webpack-shell-plugin-next");
const webpackLiveReload = require("webpack-livereload-plugin");
const path = require("path");
const banner = require("./tasks/banner/banner.js");
const package = require("./package.json");
const externals = require("webpack-node-externals");
const analyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = (type, target, test) => {
    return {
        target: target === "es6" ? "web" : ["web", "es5"],
        entry: `./src/${type}/index.ts`,
        output: {
            filename: "index.js",
            path: path.resolve(
                __dirname,
                type,
                (target !== "umd" && target) || ""
            ),
            library:
                target === "umd"
                    ? {
                          name: (
                              package.name +
                              ((type === "builder" && "-builder") || "")
                          )
                              .split("-")
                              .map(
                                  (s) => s.charAt(0).toUpperCase() + s.substr(1)
                              )
                              .join(""),
                          type: "umd",
                          umdNamedDefine: true,
                      }
                    : {
                          type: "commonjs2",
                      },
            globalObject:
                (type === "runner" && target === "umd" && "this") || undefined,
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                    options: {
                        compilerOptions: {
                            noEmit: false,
                            noUnusedLocals: false,
                            declaration: type === "runner" && target === "umd",
                            target: target === "es6" ? "ES6" : "ES5",
                            module: target === "es6" ? "ES6" : "CommonJS",
                            outDir: `./${type}${
                                (target !== "umd" && "/" + target) || ""
                            }`,
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
            target === "umd"
                ? {
                      tripetto: "Tripetto",
                      "tripetto-runner-foundation": "TripettoRunner",
                  }
                : [externals()],
        optimization: {
            minimizer: [
                new webpackTerser({
                    terserOptions: {
                        format: {
                            preamble: `/*! ${banner} */`,
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                PACKAGE_NAME: JSON.stringify(package.name),
                PACKAGE_VERSION: JSON.stringify(package.version),
            }),
            ...(type === "builder" && target === "umd"
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
            ...(!test
                ? [
                      new analyzer({
                          analyzerMode: "static",
                          reportFilename: `../${
                              target !== "umd" ? "../" : ""
                          }reports/bundle-${type}-${target}.html`,
                          openAnalyzer: false,
                      }),
                  ]
                : []),
        ],
    };
};

module.exports = (env, argv) => {
    return [
        config("builder", "umd", argv.mode !== "production"),
        ...(argv.mode === "production"
            ? [
                  config("builder", "es5"),
                  config("builder", "es6"),
                  config("runner", "umd"),
                  config("runner", "es5"),
                  config("runner", "es6"),
              ]
            : []),
    ];
};
