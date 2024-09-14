const express = require('express');
const session = require('express-session');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false
// }));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/listado-de-productos/', (req, res) => {
  res.render('productos-listar');
});
app.get('/agregar-producto/', (req, res) => {
  res.render('productos-form-agregar');
});

const productosRouter = require('./routes/productos-agregar');
app.use('/productos', productosRouter);

app.get('/productos-agregado', (req, res) => {
  res.render('producto-agregado'); 
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
