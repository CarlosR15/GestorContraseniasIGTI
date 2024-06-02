const crypto = require('crypto');

function obtenerCaracterRandom(cont) {
    const randomIndex = crypto.randomInt(0, cont.length);
    return cont[randomIndex];
}

function generarCont(opciones) {
    const { tamanio, mayus, minus, num, caracEsp } = opciones;

    const minusLetr = 'abcdefghijklmnñopqrstuvwxyz';
    const mayusLetr = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const numExt = '0123456789';
    const caracEspChar = '!@#$%^&*()-_+=<>?';

    let contrasenia = '';
    let cont = '';
    
    if (minus) {
        contrasenia += obtenerCaracterRandom(minusLetr);
        cont += minusLetr;
    }

    if (mayus) {
        contrasenia += obtenerCaracterRandom(mayusLetr);
        cont += mayusLetr;
    }

    if (num) {
        contrasenia += obtenerCaracterRandom(numExt);
        cont += numExt;
    }

    if (caracEsp) {
        contrasenia += obtenerCaracterRandom(caracEspChar);
        cont += caracEspChar;
    }

    for (let i = contrasenia.length; i < tamanio; i++) {
        contrasenia += obtenerCaracterRandom(cont);
    }


    contrasenia = contrasenia.split('').sort(() => 0.5 - Math.random()).join('');

    return contrasenia;
}

module.exports = generarCont;