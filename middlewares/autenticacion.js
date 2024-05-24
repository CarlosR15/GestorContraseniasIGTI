const jwt = require('jsonwebtoken');
const crypto = require('crypto');

async function authenticate(req, res, next) {
    // Verifica si hay un token en las cookies de la solicitud
    const token = req.cookies.token;

    // Si no hay token, redirige al usuario al login
    if (!token) {
        return res.redirect('/');
    }

    try {
        // Verifica el token usando la clave privada RSA del entorno
        const decoded = jwt.verify(token, process.env.RSA_PRIVATE_KEY);

        // Almacena el ID del usuario en la solicitud para su posterior uso
        req.userId = decoded.userId;

        next();

    } catch (err) {
        // Si hay un error en la verificación del token, redirige al usuario al login
        return res.redirect('/');
    }
}