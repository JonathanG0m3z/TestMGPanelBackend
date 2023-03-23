const express = require('express');
const app = express();
const morgan = require('morgan');
const dbCon = require('./db');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

dbCon();

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', routes);

app.listen(7124, () => {
  console.log('Server listening on port 7124');
});