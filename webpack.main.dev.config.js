const merge = require('webpack-merge');
const common = require("./webpack.main.common.config");

module.exports = merge(common, {

    // Add development-specific configuration options here.

});
