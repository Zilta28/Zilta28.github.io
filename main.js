
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
//Comentario
typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('El fracaso es éxito si aprendemos de él')
    .pauseFor(2500)
//No. Caracteres que se borrarán
    .deleteChars(19)
    .typeString('<strong>solo se fuerte!</strong>')
    .pauseFor(2500)
    .start();
    