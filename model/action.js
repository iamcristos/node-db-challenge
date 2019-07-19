const db = require('../data/dbConfig');
const product = require('./project');

module.exports = {
    addActions(actions, project_id) {
        return db('actions')
                .insert({...actions, project_id})
                .then(()=> product.getProjectAction(project_id))
    },

    getAction() {
        return db('actions')
    },

    getActionDescription(action_description) {
        return db('actions')
                .where({action_description})
    }
}