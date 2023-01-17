const dotenv = require('dotenv');
require("dotenv").config();

// Load config
dotenv.config({ path: './config/config.env' })

const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB
});

module.exports = pool;