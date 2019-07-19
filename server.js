const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const server = express();

server.use(helmet());
server.use(express());
server.use(logger('dev'));

module.exports = server;