const { Sequelize } = require('sequelize');
const pg = require('pg');

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
});

async function getPostgresConnection() {
  const client = await pool.connect();
  return client;
}

const sequelize = new Sequelize({
  dialect: 'postgres',
  dialectModule: pg,
  define: {
    timestamps: false,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  query: async (query, options, callback) => {
    const client = await getPostgresConnection();
    try {
      const result = await client.query(query, options);
      callback(null, result);
    } catch (error) {
      callback(error, null);
    } finally {
      client.release();
    }
  },
});

module.exports = sequelize;
