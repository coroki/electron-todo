const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require("./webpack.renderer.common.config");

module.exports = merge(common, {

    entry: Object.keys(common.entry).reduce((o, k) => {
        o[k] = ['react-hot-loader/patch'];
        return o;
    }, {}),

    devServer: {
        contentBase: common.output.path,
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]

});
