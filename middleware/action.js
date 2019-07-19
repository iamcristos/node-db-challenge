const response = require('../helpers/response');

module.exports = {
    validateBody: async function(req,res, next) {
        const {body} = req;
        if (!Object.keys(body).length) {
            return response.errorHandler(res, 400, "Invalid Body type")
        }
        if (!body.action_description) {
            return response.errorHandler(res, 400, 
                "project_name and action_description are required")
        }
        next()
    },
}