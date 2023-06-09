'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config');
module.exports = () => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Orders.init(
    {
      id_pesanan: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      id_penerbangan: DataTypes.INTEGER,
      tanggal_pesan: DataTypes.DATE,
      jumlah_penumpang: DataTypes.INTEGER,
      total_tiket: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Orders',
    }
  );
  return Orders;
};
