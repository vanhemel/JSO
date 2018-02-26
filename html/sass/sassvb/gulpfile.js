"use strict"
var gulp=require("gulp");
var sass=require('gulp-sass');
var cleanCSS=require('gulp-clean-css');
var rename=require('gulp-rename');
var browserSync = require('browser-Sync').create();


const paths = {
    styles: {
      src: 'scss/**/*.scss',
      dest: 'css/'
    }
  };
  
gulp.task('log',function(){
    console.log('Heen gulp nodih');
})

gulp.task('sass',function(){
    return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(cleanCSS())
    .pipe(rename({
        basename: 'style',
        suffix: '.min'
    }))
    .pipe(browserSync.stream())
    .pipe(gulp.dest(paths.styles.dest));
    
})

gulp.task('sass:watch',function(){
    gulp.watch(paths.styles.src, ['sass'])
})

gulp.task('serve', function() {
    browserSync.init({
        server: {
            server: "./"
        }
    });
    gulp.watch(paths.styles.src,['sass']);
    gulp.watch('*.html').on('change',browserSync.reload);
});

gulp.task('default',['serve']); // serve wordt nu de default-taak. Als men enkel gulp typt zonder iets bij, wordt serve uitgevoerd