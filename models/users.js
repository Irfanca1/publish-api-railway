const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config');

class User extends Model {
  static associate(models) {
    // define associations here
  }
}

const UserModel = User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    alamat: DataTypes.STRING,
    email: DataTypes.STRING,
    nomor_telepon: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users', // Name of the table in the database
  }
);

module.exports = UserModel;
