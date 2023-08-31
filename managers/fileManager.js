const fileRepostory = require('../repositories/fileRepository')
const { v4: uuidv4 } = require('uuid');

//Lo de Azure
// // Se crea un blob
// const blobName = 'UnicId' + uuidv1() + '.txt';

// // Get a block blob client
// const blockBlobClient = containerClient.getBlockBlobClient(blobName);

// // Display blob name and url
// console.log(
//   `\nUploading to Azure storage as blob\n\tname: ${blobName}:\n\tURL: ${blockBlobClient.url}`
// );

// // Upload data to the blob
// const data = 'Hello, World!';
// const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
// console.log(
//   `Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId}`
// );

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
      fileId: uuidv4()
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

