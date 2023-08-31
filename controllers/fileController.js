//Traigo mis managers
const FileManager = require('../managers/fileManager')

const FileController = {
  get: async (req, res) => {
    try {
      const file = await FileManager.get(req)
      if (!file) {
        res.status(404).send('Archivo no encontrado')
      } else {
        res.status(200).send(file)
      }
    } catch (error) {
      res.status(500).send('Error interno del servidor')
    }
  },

  list: async (req, res) => {
    try {
      const fileList = await FileManager.list()
      res.status(200).send(fileList)
    } catch (error) {
      res.status(500).send('Error interno del servidor')
    }
  },
  create: async (req, res) => {
    try {
      const fileCreated = await FileManager.create(req)
      res.status(201).send('Archivo registrado correctamente')
    } catch (error) {
      res.status(500).send('Error interno del servidor' + error)
    }
  },
  update: async (req, res) => {
    try {
      const fileUpdated = await FileManager.update(req)
      if (!fileUpdated) {
        res.status(404).send('Archivo no encontrado')
      } else {
        res.status(200).send('Archivo actualizado correctamente')
      }
    } catch (error) {
      res.status(500).send('Error interno del servidor')
    }
  },
  destroy: async (req, res) => {
    try {
      const fileDestroyed = await FileManager.destroy(req)
      if (!fileDestroyed) {
        res.status(404).send('Archivo no encontrado')
      } else {
        res.status(200).send('Archivo eliminado correctamente')
      }
    } catch (error) {
      res.status(500).send('Error interno del servidor')
    }
  },
}

module.exports = FileController
