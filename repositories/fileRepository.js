const { DataTypes } = require('sequelize')
const { db } = require('../config/database')

const File = db.define('File', {
  fileId: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fileType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = File

