const express = require('express');
const cors = require('cors');
const { db, initializeApp } = require('./config/database');

const fileRoutes = require('./routes/fileRoutes');

initializeApp(db);

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:4200', // Cambia esto al dominio correcto de tu aplicación Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  optionsSuccessStatus: 204,
};

app.use(express.json({ limit: "50mb" }))

app.use(cors()); // Habilitar CORS con las opciones configuradas

const port = 3001;
app.use('', fileRoutes);

app.get('*', (req, res) => {
  res.status(404).send('Esta página no existe');
});

app.listen(port, () => {
  console.log('Servidor ejecutado en el puerto', port);
});
