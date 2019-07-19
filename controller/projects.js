const db = require('../model/project');
const response = require('../helpers/response');

module.exports = {
    getProject: async function(req, res) {
        try {
            const projects = await db.getProject()
            if(!projects.length) {
                return response.errorHandler(res, 200, "No projects currently")
            }
            return response.successHandler(res, 200, projects)
        } catch (error) {
            return response.errorHandler(res, 500, "Error getting projects")
        }
    },

    addProject: async function(req,res) {
        try {
            const {body} = req;
            const project = await db.addProject(body)
            return response.successHandler(res, 201, project )
        } catch (error) {
            return response.errorHandler(res, 500, "Error project was not added")
        }
    },

    getProjectActions: async function(req, res) {
        const {id} = req.params;
        try {
            const actions = await db.getProjectAction(id)
            if (!actions.length) {
                return response.errorHandler(res, 200, "No actions for these project")
            }
            return response.successHandler(res, 200, {...req.project, actions})
        } catch (error) {
            return response.errorHandler(res, 500, "Error cannot find project actions")
        }
    }
}