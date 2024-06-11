import * as sass from 'sass'
import gulpSass from 'gulp-sass'
import fileInclude from 'gulp-file-include'
import clean from 'gulp-clean'
import browserSync from 'browser-sync'
import webpackStream from 'webpack-stream'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import webp from 'gulp-webp'
import autoPrefixer from 'gulp-autoprefixer'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'
import { paths } from './index.js'


const scss = gulpSass(sass);

const plugins = {
   scss,
   fileInclude,
   clean,
   imagemin,
   newer,
   webp,
   autoPrefixer,
   fonter,
   ttf2woff2,
   browserSync: browserSync.init({
      server: {
      baseDir: `${paths.dist}`
      },
      notify: false,
      port: 3001
   }),
   webpackStream: webpackStream({
      mode: 'development',
      // entry: './src/js/index.js',
      output: {
        filename: 'index.js'
      },
      module: {
         rules: [
            {test: /\.(sass|scss|less|css)$/,
            use: ["style-loader", "css-loader", 'sass-loader'],}
         ]
      }
    })
}

export default plugins