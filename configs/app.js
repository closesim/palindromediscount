require('dotenv').config();

const assert = require('assert');

const { PORT } = process.env;

assert(PORT, 'PORT es requerido');

module.exports = {
  PORT,
};
