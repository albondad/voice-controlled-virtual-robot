const path = require("path");
const webpack = require("webpack");
const dotenv = require('dotenv');


const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {presets: ['@babel/env']}
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: "/dist",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        port: 3000,
        publicPath: "http://localhost:3000",
        hot: true,
        open: true
    },
    plugins: [new webpack.DefinePlugin(envKeys)]
}