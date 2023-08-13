const fileRepostory = require('../repositories/fileRepository')

const fileManager = {
  get: async (req, res) => {
    const { id } = req.params
    return await fileRepostory.findByPk(id)
  },

  list: async (req, res) => {
    return await fileRepostory.findAll()
  },

  create: async (req, res) => {
    return await fileRepostory.create({
      fileName: req.body.fileName,
      fileType: req.body.fileType,
    })
  },
  update: async (req, res) => {
    const { id } = req.params
    const file = await fileRepostory.findByPk(id)
    if (file) {
      file.fileName = req.file.fileName
      file.fileType = req.file.fileType
      return await file.save()
    }
  },

  destroy: async (req, res) => {
    const { id } = req.params
    const file = await fileRepostory.findByPk(id)
    if (file) {
      return await file.destroy()
    }
  },
}

module.exports = fileManager
