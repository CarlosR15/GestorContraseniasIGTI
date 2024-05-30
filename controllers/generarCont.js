const crypto = require('crypto');

function obtenerCaracterRandom(cont) {
    const randomIndex = crypto.randomInt(0, cont.length);
    return cont[randomIndex];
}

function generarCont(length = 12) {

    const minus = 'abcdefghijklmnñopqrstuvwxyz';
    const mayus = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const num = '0123456789';
    const caracEsp = '!@#$%^&*()-_+=<>?';

    let contrasenia = '';
    
    // Hace que la contraseña tenga como minimo una minuscula, una mayuscula, un numero, y un caracter especial
    contrasenia += obtenerCaracterRandom(minus);
    contrasenia += obtenerCaracterRandom(mayus);
    contrasenia += obtenerCaracterRandom(num);
    contrasenia += obtenerCaracterRandom(caracEsp);

    let cont = minus + mayus + num + caracEsp; // concatena los caracteres :0

    // Genera mas caracteres, letras o numeros al azar, para llegar al numero que se pidio
    for (let i = contrasenia.length; i < length; i++) {
        contrasenia += obtenerCaracterRandom(cont);
    }

    // Mueve los caracteres, letras o numeros al azar
    contrasenia = contrasenia.split('').sort(() => 0.5 - Math.random()).join('');

    return contrasenia;
}

module.exports = generarCont;