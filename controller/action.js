const db = require('../model/action');
const response = require('../helpers/response');

module.exports = {
    getActions: async function(req, res) {
        try {
            const actions = await db.getAction()
            if(!actions.length) {
                return response.errorHandler(res, 200, "No actions")
            }
            return response.successHandler(res, 200, actions);
        } catch (error) {
            return response.errorHandler(res, 500, "Error cannot get actions")
        }
    },

    addAction: async function(req, res) {
        const {id} = req.params;
        const {body} = req;
        
        try {
           const actions = await db.addActions(body, id) 
           return response.successHandler(res, 201, actions)
        } catch (error) {
            return response.errorHandler(res, 500,"Error cannot add actions")
        }
    }
}