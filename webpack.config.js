const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
require('dotenv').config()

let plugins = [
    new VuetifyLoaderPlugin(),
    // new BundleAnalyzerPlugin()
];

if (process.env.NODE_ENV === 'production') {
    // plugins.push(new BundleAnalyzerPlugin());
}

let config = {}
if (process.env.NODE_ENV === 'production') {
    config = {
        ...config, ...{
            stats: 'errors-only',
            performance: {hints: false},
        }
    }
}
module.exports = {
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src'),
        },
    },
    plugins,
    output: {
        path: path.resolve(__dirname, process.env.MIX_BUILD_OUTDIR),
        filename: 'vue2.js'
    }
};
