const express = require('express');
const app = express();
const port = 9000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Ruta para clientes
app.get('/clientes', (req, res) => {
    res.send('Aquí se mostrarán los clientes.');
  });
  
  // Ruta para productos
  app.get('/productos', (req, res) => {
    res.send('Aquí se mostrarán los productos.');
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

