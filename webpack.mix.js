const mix = require('laravel-mix');
const path = require('path');

require('laravel-mix-purgecss');
const webpack = require('./webpack.config.js');


mix.js('src/main.js', '../../../public/legacy/js/vue2.js')
    .vue({ version: 2 })
    .setPublicPath('../../../public')
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
