const Sequelize = require('sequelize');

const pool = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Hanya diperlukan jika menggunakan SSL self-signed
    },
  },
});

pool
  .authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL successfully!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = pool;
