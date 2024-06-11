import gulpPkg from 'gulp'
import paths from './paths.js'
import plugins from './plugins.js'
import task from './tasks.js';

const gulp = {
   src: gulpPkg.src,
   dest: gulpPkg.dest,
   series: gulpPkg.series,
   parallel: gulpPkg.parallel,
   watch: gulpPkg.watch
};

export default gulp
export { paths, plugins, task }