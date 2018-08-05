const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            }
        ]
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
}