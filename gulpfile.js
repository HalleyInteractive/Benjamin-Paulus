const gulp = require('gulp');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const DEST_FOLDER = 'dist';

gulp.task('default',
    ['minify-main-js',
    'copy-hammerjs',
    'css',
    'img',
    'other-files'], function () {
        console.log("Done");
});

gulp.task('img', function() {
    return gulp.src(['img/**/*.png', 'img/**/*.svg'])
    .pipe(gulp.dest(DEST_FOLDER + '/img'));
});

gulp.task('other-files', function() {
    gulp.src(['*.png', '*.ico', '*.html', '*.txt'])
    .pipe(gulp.dest(DEST_FOLDER));
})

gulp.task('css', function() {
    return gulp.src('css/**/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(gulp.dest(DEST_FOLDER + '/css'));
});

gulp.task('minify-main-js', function() {
    return gulp.src('js/main.js')
    .pipe(jsmin())
    .pipe(gulp.dest(DEST_FOLDER + '/js'));
});

gulp.task('copy-hammerjs', function() {
    return gulp.src('js/hammer.min.js')
    .pipe(copy(DEST_FOLDER));
});