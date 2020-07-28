const mongoose = require('mongoose');
const {
  database: {
    MONGODB_DB,
    MONGODB_HOST,
    MONGODB_PASSWORD,
    MONGODB_PORT,
    MONGODB_USER,
  },
} = require('./app');

const MONGODB_URL = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}?authSource=admin`;
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

module.exports = db;
