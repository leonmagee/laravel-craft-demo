const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  // .js("src/js/app.js", "js")
  .ts("src/js/app.ts", "js")
  .react()
  .sass("src/sass/app.scss", "css")
  .version()
  .browserSync({
    proxy: "https://craft-demo.test",
    port: 8081,
    https: {
      key: "/Users/leonmagee/.localhost-ssl/key.pem",
      cert: "/Users/leonmagee/.localhost-ssl/cert.pem",
    },
  })
  .extract();