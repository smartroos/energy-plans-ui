const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

let plugins = [
    new VuetifyLoaderPlugin(),
    new BundleAnalyzerPlugin()
];

if (process.env.NODE_ENV === 'production') {
    // plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src'),
        },
    },
    plugins,
    output: {
        path: path.resolve(__dirname, '../../../public/legacy/js'),
        filename: 'vue2.js'
    }
};
