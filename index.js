// Modulos de terceros
const express = require('express')
const cors = require('cors');
const { db, initializeApp } = require('./config/database')

//Routes
const fileRoutes = require('./routes/fileRoutes')

initializeApp(db)

const app = express()
app.use(express.json())

app.use(cors());

const port = 3001
app.use('', fileRoutes)

app.get('*', (req, res) => {
  res.status(404).send('Esta página no existe')
})

app.listen(port, () => {
  console.log('Servidor ejecutado en el puerto', port)
})

