const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function style(){
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("./dist/main.css"));
}

exports.default = style;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(style))
}