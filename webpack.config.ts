import webpack from "webpack";
import NodemonPlugin from "nodemon-webpack-plugin";

const config: webpack.Configuration = {
    mode: "development",
    entry: "./src/main.ts",
    plugins: [new NodemonPlugin()],
};

module.exports = config;
