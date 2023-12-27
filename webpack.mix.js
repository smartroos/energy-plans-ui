const mix = require('laravel-mix');
const path = require('path');
require('dotenv').config()

require('laravel-mix-purgecss');
const webpack = require('./webpack.config.js');


mix.js('src/main.js', path.join(process.env.MIX_BUILD_OUTDIR, 'vue2.js'))
    .vue({ version: 2 })
    .setPublicPath(process.env.MIX_PUBLIC_PATH)
    .webpackConfig(Object.assign(webpack))
    // .options({
    //     postCss: [require('autoprefixer')],
    // })
    // .purgeCss({
    //     content: [
    //         path.join(__dirname, 'src/**/*.vue'),
    //         path.join(__dirname, 'src/**/*.js'),
    //         // You can also include any other file that may contain Vue templates
    //     ],
    //     safelist: {
    //         standard: [/^v-/, /^theme--dark/, /^theme--light/],
    //         // Add other classes here that you want to ensure are not purged
    //     },
    //     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    // });
