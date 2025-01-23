const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function scripts() {
    return gulp.src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
}

function style() {
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("./dist/main.css"));
}

function images() {
    return gulp.src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));
}

exports.default = gulp.parallel(style, images,  scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(style))
    gulp.watch('./dist/scripts/*.js', gulp.parallel(scripts))
}