'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config');
module.exports = () => {
  class airlines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  airlines.init(
    {
      nama_maskapai: DataTypes.STRING,
      kode_maskapai: DataTypes.STRING,
      tipe_maskapai: DataTypes.STRING,
      harga_tiket: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'airlines',
    }
  );
  return airlines;
};
