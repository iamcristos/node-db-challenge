const db = require('../model/project');
const response = require('../helpers/response');

module.exports = {
    async validateBody(req,res, next) {
        const {body} = req;
        if (!Object.keys(body).length) {
            return response.errorHandler(res, 400, "Invalid Body type")
        }
        if (!body.project_name || !body.project_description) {
            return response.errorHandler(res, 400, 
                "project_name and project_description are required")
        }
        try {
            const project = await db.getProjectName(body.project_name);
            if (project.length) {
                return response.errorHandler(res, 400, "project already exists")
            }
        } catch (error) {
            return response.errorHandler(res, 500, "Error cannot add project")
        }

        next()
    },

    async validateId(req, res, next) {
        const {id} = req.params
        if(!Number(id)) {
            return response.errorHandler(res, 400, "Invalid Id type")
        }
        try {
            const project = await db.getProjectId(id)
            if(!project) {
                return response.errorHandler(res, 404, "Project doesnot exists")
            }
            req.project = project
        } catch (error) {
            return response.errorHandler(res, 500, "Error server didn't get project")
        }
        next()
    }
}