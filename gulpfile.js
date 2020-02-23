const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Copy all HTML files
gulp.task('copyHtml', async () =>
        gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
);

// Optimize Images
gulp.task('imageMin', async () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// Minify JS
gulp.task('minify', async () =>
    gulp.src('src/js/*js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
);

// Compile Sass
gulp.task('sassProd', async () =>
    gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
);

gulp.task('jsProd', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('sass', async () =>
    gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
);

gulp.task('js', async () =>
    gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream())
);

// gulp.task('icons', async () =>
//     gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
//         .pipe(gulp.dest('assets/webfonts'))
// );

gulp.task('serve', gulp.parallel('sass', 'js'), async() => {

    browserSync.init({
        server: "./src",
        browser: "[chrome.exe]"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.series(['sass']));
    gulp.watch("src/*.html").on('change', browserSync.reload);
})

gulp.task('default', gulp.parallel('copyHtml', 'imageMin', 'minify', 'sassProd', 'jsProd'));

