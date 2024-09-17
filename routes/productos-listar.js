const express = require('express');
const router = express.Router();
const connection = require('../db'); // Archivo con la conexión a la base de datos


router.get('/productos/listar', (req, res) => {
    const sql = 'SELECT * FROM productos'; // Consulta para obtener todos los productos

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener los productos:', err);
            return res.status(500).send('Error al obtener los productos');
        }

        // Pasar los resultados a la vista
        res.render('productos-listar', { productos: results });
    });
});

module.exports = router;
