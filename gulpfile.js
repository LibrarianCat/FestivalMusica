const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done) {
    src("src/scss/app.scss")    // Identificar el archivo SASS
    .pipe( sass() )    //Compilarlo
    .pipe( dest("build/css") );    // Almacenarla en el disco duro


    done(); //Callback que avisa a gulp cuando llegamos al final
}

exports.css = css;















// function tarea( done ) {
//     console.log('mi primera tarea');
    
//     done();
// }

// exports.tarea = tarea;