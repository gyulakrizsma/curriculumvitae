/// <binding Clean='clean' />
'use strict';
var gulp = require('gulp'),
  rimraf = require('rimraf'),
  concat = require('gulp-concat'),
  cssmin = require('gulp-cssmin'),
  uglify = require('gulp-uglify'),
  less = require('gulp-less'),
  mainBowerFiles = require('main-bower-files'),
  project = require('./project.json');

var paths = {
  webroot: './wwwroot/'
};

paths.concatJsDest = paths.webroot + 'lib/production/js/home.min.js';
paths.concatCssDest = paths.webroot + 'lib/production/css/home.min.css';

gulp.task('bower', function () {
    return gulp.src(mainBowerFiles(), { base: './bower_components' })
        .pipe(gulp.dest(paths.webroot + 'lib/'));
});

gulp.task('copyFonts', function () {
    return gulp.src(
        [
            paths.webroot + 'lib/bootstrap/dist/fonts/**',
            paths.webroot + 'lib/font-awesome/fonts/**'
        ])
        .pipe(gulp.dest(paths.webroot + 'lib/production/fonts'))
});

gulp.task('less', function (){
    return gulp.src(paths.webroot + 'css/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest(paths.webroot + 'css'));
});

gulp.task('clean:js', function(cb) {
  rimraf(paths.concatJsDest, cb);
});

gulp.task('clean:css', function(cb) {
  rimraf(paths.concatCssDest, cb);
});

gulp.task('min:js', function() {
    gulp.src(
        [   paths.webroot + 'lib/jquery/dist/jquery.js',
            paths.webroot + 'lib/smoothscroll/smoothscroll.js',
            paths.webroot + 'lib/jquery.scrollto/jquery.scrollto.js',
            paths.webroot + 'lib/owl-carousel/owl-carousel/owl.carousel.js',
            paths.webroot + 'lib/wow/dist/wow.js',
            paths.webroot + 'client/home/home.js'])
    .pipe(concat(paths.concatJsDest))
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});

gulp.task('min:css', function() {
    gulp.src(
        [   paths.webroot + 'lib/bootstrap/dist/css/bootstrap.css',
            paths.webroot + 'lib/owl-carousel/**/*.css',
            paths.webroot + 'lib/wow/css/animate.css',
            paths.webroot + 'lib/bootstrap-social/bootstrap-social.css',
            paths.webroot + 'lib/font-awesome/css/font-awesome.css',
            paths.webroot + 'css/home.css'])
    .pipe(concat(paths.concatCssDest))
    .pipe(cssmin())
    .pipe(gulp.dest('.'));
});

gulp.task('min', ['min:js', 'less' ,'min:css']);
gulp.task('clean', ['clean:js', 'clean:css']);

gulp.task('prod', ['clean', 'min', 'copyFonts']);