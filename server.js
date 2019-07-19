const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const projectRoute = require('./route/projects');

const server = express();

server.use(helmet());
server.use(express());
server.use(logger('dev'));

server.use('/api/projects', projectRoute);

module.exports = server;