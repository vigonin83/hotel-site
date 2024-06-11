import gulp, { paths, task, plugins } from './gulp/index.js'

const { html, styles, fonts, scripts, img } = task

function copyFiles() {
  return gulp.src(`${paths.src}**/*.*`).pipe(gulp.dest(`${paths.dist}`))
}

function cleanDist() {
  return (
    gulp.src(`${paths.dist}**/`, { read: false })
    .pipe(plugins.clean())
    );
  }

function watching() {
  gulp.watch(`${paths.src}**/*.html`, gulp.parallel(html))
  gulp.watch(`${paths.src}styles/**/*.scss`, gulp.parallel(styles))
  gulp.watch(`${paths.src}js/**/*.js`, gulp.parallel(scripts))
}

function startServer() {
  plugins.browserSync
}

const dev = gulp.series(cleanDist, html, styles, fonts, img, scripts, gulp.parallel(watching, startServer))

export default dev
export {html, styles, scripts, fonts, img, watching, startServer, cleanDist, copyFiles}
