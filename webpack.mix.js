let mix = require('laravel-mix');

mix
  .js('src/js/main.js', 'assets/js')
  .sass('src/css/main.scss', 'assets/css')
