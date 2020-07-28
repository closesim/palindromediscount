require('dotenv').config();

const assert = require('assert');

const {
  PORT,
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_DB,
  MONGODB_PORT = '27017',
  MONGODB_HOST = 'localhost',
} = process.env;

assert(PORT, 'PORT is required');
assert(MONGODB_DB, 'MONGODB_DB is required');
assert(MONGODB_USER, 'MONGODB_USER is required');
assert(MONGODB_PASSWORD, 'MONGODB_PASSWORD is required');

module.exports = {
  PORT,
  database: {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_DB,
    MONGODB_PORT,
    MONGODB_HOST,
  },
};
