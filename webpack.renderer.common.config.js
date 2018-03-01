const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_SRC = path.resolve(__dirname, 'src/renderer');
const PATH_ASSETS = path.resolve(__dirname, 'assets');
const PATH_OUTPUT = path.resolve(__dirname, 'dist');

module.exports = {

    entry: {
        index: [
            PATH_SRC + '/index.tsx'
        ]
    },

    output: {
        path: PATH_OUTPUT,
        filename: '[name].js'
    },

    target: 'electron-renderer',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    PATH_SRC
                ],
                use: [{
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.less$/,
                include: PATH_SRC,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            localIdentName: "[name]__[local]--[hash:base64:5]",
                            minimize: true,
                            modules: true
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.less', '.css']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            template: PATH_ASSETS + '/index.html'
        })
    ]

}
