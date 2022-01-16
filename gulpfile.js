const gulp = require('gulp');
const sass = require('gulp-sass');
const combine = require('gulp-scss-combine');
const concat = require('gulp-concat');

function style(){
    return gulp.src('./src/sass/*.sass')
    .pipe(combine())   // combine them based on @import and save it to stream
    .pipe(concat('main.scss')) // concat the stream output in single file
    .pipe(gulp.dest('./dist/css/'))  // save file to destination.
}
exports.style = style;