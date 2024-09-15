const express = require('express');
const router = express.Router();
const connection = require('../db'); // archivo con la conexion a la base de datos

router.post('/agregar', (req, res) => {
    console.log(req.body); // Imprimo lo que recibo para depurar y ver si recibo los datos
    const { nombre_producto, categoria, descripcion, ingredientes, clasificacion, titulo_enlace, url_enlace } = req.body;
    const sql = `INSERT INTO productos (nombre_producto, categoria, descripcion, ingredientes, clasificacion, titulo_enlace, url_enlace)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

    connection.query(sql, [nombre_producto, categoria, descripcion, ingredientes, clasificacion, titulo_enlace, url_enlace], (err, results) => {
        if (err) {
            console.error('Error al insertar en la base de datos:', err);
            return res.status(500).send('Error al guardar el producto');
        }
        res.redirect('/producto-agregado');
    });
});

module.exports = router;
