const {src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat')
const cleanCss = require('gulp-clean-css')

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
}


function css() {
    return src(paths.scss)
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(dest('./public/build/css'))
}

function watchArchivos() {
    watch(paths.scss, css)
}

exports.default = parallel(css, watchArchivos);