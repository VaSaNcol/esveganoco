const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // O la dirección de tu servidor MySQL
  user: 'root', // Tu usuario de MySQL
  password: '', // Tu contraseña de MySQL
  database: 'nombre_base_datos' // El nombre de la base de datos que creaste
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
