import gulp, { paths, plugins } from './index.js'

function html () {
  return (
    gulp.src(`${paths.src}*.html`)
    .pipe(plugins.fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(`${paths.dist}`))
    .pipe(plugins.browserSync.stream())
  )
}

function styles () {
  return (
    gulp.src(`${paths.src}styles/*.scss`)
    .pipe(plugins.scss())
    .pipe(plugins.autoPrefixer({cascade: false}))
    .pipe(gulp.dest(`${paths.dist}styles/`))
    .pipe(plugins.browserSync.stream())
  )
}

function scripts() {
  return (
    gulp.src(`${paths.src}js/**/*.*`, { sourcemaps: true })
    .pipe(plugins.webpackStream)
    .pipe(gulp.dest(`${paths.dist}js/`))
    .pipe(plugins.browserSync.stream())
  )
}

function fonts () {
  return (
    gulp.src(`${paths.src}fonts/**/*.*`)
    .pipe(plugins.fonter({
      formats: ['woff', 'ttf']
    }))
    // .pipe(gulp.dest(`${paths.dist}fonts/*.ttf`))
    .pipe(plugins.ttf2woff2())
    .pipe(gulp.dest(`${paths.dist}fonts/`))
  )
}

function img () {
  return (
    gulp.src(`${paths.src}img/**/*.*`)
    .pipe(plugins.newer(`${paths.dist}img/`))
    .pipe(plugins.webp())
    .pipe(gulp.dest(`${paths.dist}img/`))
    .pipe(gulp.src(`${paths.src}img/**/*.*`))
    .pipe(plugins.newer(`${paths.dist}img/`))
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(`${paths.dist}img/`))
    .pipe(plugins.browserSync.stream())
    )
}

const task = {
  html,
  styles,
  scripts,
  fonts,
  img,
}

 export default task