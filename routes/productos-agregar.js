const express = require('express');
const router = express.Router();
const connection = require('../db'); //  archivo con la conexion a la base de datos
router.get('/agregar', ProductosController.mostrarFormulario);
// Ruta para agregar productos
router.post('/agregar', (req, res) => {
    const { nombre, categoria, descripcion, ingredientes, clasificacion, titulo_enlace, url_enlace } = req.body;
    const sql = `INSERT INTO productos (nombre, categoria, descripcion, ingredientes, clasificacion, titulo_enlace, url_enlace)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

    connection.query(sql, [nombre, categoria, descripcion, ingredientes, clasificacion, titulo_enlace, url_enlace], (err, results) => {
        if (err) {
            console.error('Error al insertar en la base de datos:', err);
            return res.status(500).send('Error al guardar el producto');
        }
        // res.send('Producto agregado con éxito');
        res.redirect('/producto-agregado');
    });
});

module.exports = router;
