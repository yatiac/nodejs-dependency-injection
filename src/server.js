'use strict';

const express = require('express');
const dogs = require('./handlers/dogs');

function server(axios) {
  const app = express();
  app.get('/dogs', dogs(axios));
  return app;
}

module.exports = server;
