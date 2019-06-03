const gulp = require("gulp");
const imgmin = require("gulp-imagemin");
const jsmin = require("gulp-uglify");
const cssmin = require("gulp-clean-css");
const connect = require("gulp-connect");
const babel = require('gulp-babel');
// const watch = require('gulp-watch');


gulp.task('copyIndex', () => {
    gulp.src('./src/html/*.html').pipe(gulp.dest('./dist/html'));
})

gulp.task('copyphp', () => {
    gulp.src('./src/php/*.php')
        .pipe(gulp.dest('./dist/php'))

})
gulp.task('copyfont', () => {
    gulp.src('./src/images/font/*')
        .pipe(gulp.dest('./dist/images/font'))
})

gulp.task('copyjson', () => {
    gulp.src('./src/json/*.json')
        .pipe(gulp.dest('./dist/json'))

})

gulp.task('imgmin', () => {
    gulp.src("./src/images/*")
        .pipe(imgmin())
        .pipe(gulp.dest('./dist/images'))
})

gulp.task('Jsmin', () => {
    gulp.src("./src/js/js/smallpic.js")
        .pipe(jsmin())
        .pipe(gulp.dest('./dist/js/js'))
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
})

gulp.task('changeLibSrc', () => {
    gulp.src('./src/js/lib/**/*')
        .pipe(gulp.dest('./dist/js/lib'))
})
gulp.task('changePlugSrc', () => {
    gulp.src('./src/js/plug/**/*')
        .pipe(gulp.dest('./dist/js/plug'))
})

gulp.task('cssMin', () => {
    gulp.src('./src/css/*.css')
        .pipe(cssmin()) //压缩
        .pipe(gulp.dest('./dist/css'))

})

gulp.task('babel', () => {
    gulp.src('./src/js/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./dist/js/js'));
})



gulp.task('serverStart', () => {
    connect.server({
        //路径
        root: './',
        prot: 8888,
        livereload: true
    })
})

// gulp.task('watchServer', () => {
//     //封装gulp-watch
//     function gulpWatch(src, gulpTast) {
//         return gulp.watch(src, () => {
//             gulp.start(gulpTast);
//         })
//     }
//     //监听执行的任务
//     gulpWatch('./src/css/**/*.css', 'css')
//     gulpWatch('./src/js/js/**/*.js', 'js')
//     gulpWatch('./src/images/**/*', 'images')

// })



gulp.task("default", ['serverStart'])