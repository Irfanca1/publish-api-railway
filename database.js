const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Untuk mengatasi kesalahan "self signed certificate" saat menggunakan SSL
    },
  },
});

module.exports = sequelize;
