const express = require('express');
const projectCntr = require('../controller/projects');
const projectMiddleware = require('../middleware/project');

const route = express.Router();

route.get('/', projectCntr.getProject);

route.post('/', projectMiddleware.validateBody, projectCntr.addProject);

route.get('/:id/actions', projectMiddleware.validateId,
    projectCntr.getProjectActions);

route.put('/:id', projectMiddleware.validateId, 
    projectMiddleware.validateBody, projectCntr.updateProject);

route.delete('/:id', projectMiddleware.validateId, projectCntr.deleteProject)

module.exports = route;