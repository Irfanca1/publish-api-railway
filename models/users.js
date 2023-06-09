'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config');
module.exports = () => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
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
      modelName: 'users',
    }
  );
  return Users;
};
