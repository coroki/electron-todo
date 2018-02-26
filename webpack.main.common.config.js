const path = require('path');
const webpack = require('webpack');

const PATH_SRC = path.resolve(__dirname, 'src/main');
const PATH_OUTPUT = path.resolve(__dirname, 'dist');

module.exports = {

    entry: {
        main: PATH_SRC + '/index.ts'
    },

    output: {
        path: PATH_OUTPUT,
        filename: '[name].js'
    },

    target: 'electron-main',

    module: {
        rules: [{
            test: /\.ts$/,
            include: [
                PATH_SRC
            ],
            use: [{
                loader: 'ts-loader'
            }]
        }]
    },

    resolve: {
        extensions: ['.js', '.json', '.ts']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
    ]

}
