const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/API.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "views/index.html"
        })
    ],
    module: {
        rules: [
            {test: /\.ts$/, use: "ts-loader"}
        ]
    }
};
