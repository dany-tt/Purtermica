const gulp = require('gulp'), 
	sass = require('gulp-sass'), 
	autoprefixer = require('gulp-autoprefixer');
 
/* Creamos una tarea de gulp que compila el scss a css, 
pone los autpoprefijos dónde sean necesarios, y vuelca 
el resultado en el archivo de destino (el css). */
gulp.task('sass-compile', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css/'));
});
 
/* Establecemos un "vigilante" para que mantenga "activa" 
la tarea sass-compile. Cada vez que efectuémos un cambio 
en el archivo SASS y lo grabemos, la compilación a CSS 
se re ejecutará automáticamente. */
gulp.task('default', function () {
    gulp.watch('./scss/*.scss');
});