const express = require('express');
const actionCntr = require('../controller/action');
const projectMiddleware = require('../middleware/project');
const actionMiddleware = require('../middleware/action');

const route = express.Router();

route.get('/', actionCntr.getActions);

route.post('/:id/actions', projectMiddleware.validateId, 
    actionMiddleware.validateBody, actionCntr.addAction);

module.exports = route