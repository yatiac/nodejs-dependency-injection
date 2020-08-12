'use strict';

const axios = require('axios');
const server = require('./server');

const port = 3000;

const app = server(axios);

app.listen(port, (_) => {
  console.log(`listening on port ${port}`);
});
