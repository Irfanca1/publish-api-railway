'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config');
module.exports = () => {
  class airports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  airports.init(
    {
      nama_bandara: DataTypes.STRING,
      kode_bandara: DataTypes.STRING,
      kota: DataTypes.STRING,
      negara: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'airports',
    }
  );
  return airports;
};
