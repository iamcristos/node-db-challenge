const express = require('express');
const projectCntr = require('../controller/projects');
const projectMiddleware = require('../middleware/project');

const route = express.Router();

route.get('/', projectCntr.getProject);
route.post('/', projectMiddleware.validateBody, projectCntr.addProject);
route.get('/:id/actions', projectMiddleware.validateId, projectCntr.getProjectActions)

module.exports = route;