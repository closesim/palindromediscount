const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT } = require('./configs/app');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/healthcheck', require('./routes/healthcheck'));

app.listen(PORT, (err) => {
  if (err) {
    console.error(`${err}`);
  }

  console.log(`Server running on port: ${PORT}`);
});

module.exports = app;
