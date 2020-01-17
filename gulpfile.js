const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const sass = require('node-sass');
 
gulpSass.compiler = sass;
 
// Compile SASS
gulp.task('sass', () => gulp
  .src('./src/sass/**/*.scss')
  .pipe(gulpSass().on('error', gulpSass.logError))
  .pipe(gulp.dest('./build/assets/css'))
);

// Copy static files (like robots.txt, favicon, index.html, etc)
gulp.task('static', () => gulp.src('./src/static/**').pipe(gulp.dest('./build/')));
 
// Watch source files for changes
gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/static/**', gulp.series('static'));
});

// Build
gulp.task('build', gulp.parallel('sass', 'static'));
