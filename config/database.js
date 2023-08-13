const { Sequelize } = require('sequelize')

//Mis Credenciales e Informacion para mi conexion con MS SQL
const db = new Sequelize('fileManagement_DB', 'sa', 'admin', {
  dialect: 'mssql',
  host: 'localhost',
  port: '1066',
})
module.exports.db = db

//Exporto mi funcion para sincronizar mi base de datos
module.exports.initializeApp = async function (conn) {
  try {
    await conn.sync({ force: false })
    console.log('Conexión y sincronización exitosas.')
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error)
  }
}
