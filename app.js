const express = require("express");
const session = require("express-session");
const app = express();
const port = 4000;
const connection = require("./db");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false
// }));

app.get("/", (req, res) => {
  res.render("index");
});

// app.get('/listado-de-productos/', (req, res) => {
//   res.render('productos-listar');
// });

app.get("/agregar-producto/", (req, res) => {
  res.render("productos-form-agregar");
});

const productosRouter = require("./routes/productos-agregar");
app.use("/productos", productosRouter);

app.get("/producto-agregado", (req, res) => {
  res.render("productos-agregado");
});
app.get("/contactenos", (req, res) => {
  res.render("contactenos-form");
});

app.get("/contactar", (req, res) => {
 
  const { nombre, correo, telefono, mensaje } = req.body;
  // formatear la fecha correctamente
  const fechaformateada = new DATE(fecha).toISOString().slice(0, 10);
  const query = `INSERT INTO contacto (nombre, correo, telefono, mensaje) VALUES (?,?,?,?)`;
  connection.query(
    query,
    [nombre, correo, telefono, mensaje],
    (err, result) => {
      if (err) {
        console.error("Error al insertar datos en la base de datos:", err);
        res.status(500).send("Error al insertar datos en la base de datos");
      } else {
        console.log("Datos insertados correctamente");
        res.render("contactenos-enviado");
      }
    }
  );
});

const productosListarRouter = require("./routes/productos-listar");
const connection = require("./db");
app.use("/", productosListarRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
