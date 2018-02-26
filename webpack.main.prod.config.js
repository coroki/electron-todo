const merge = require('webpack-merge');
const common = require("./webpack.main.common.config");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {

    node: {
        __dirname: false
    },

    plugins: [
        new UglifyJSPlugin()
    ]

});
