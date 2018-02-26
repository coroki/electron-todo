const merge = require('webpack-merge');
const common = require("./webpack.renderer.common.config");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {

    plugins: [
        new UglifyJSPlugin()
    ]

});
