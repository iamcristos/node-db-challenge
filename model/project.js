const db = require('../data/dbConfig');

module.exports = {
    getProject: function() {
        return db('projects')
    },
    
    getProjectId: function(id) {
        return db('projects')
                .where({id})
                .first()
    },

    getProjectName: function(project_name) {
        return db('projects')
                .where({project_name})
    },

    addProject: function(project) {
        return db('projects')
                .insert(project)
                .then(([id])=> this.getProject([id]))
    },

    getProjectAction: function(project_id) {
        return db('actions')
                .select("*")
                .where({project_id})
    }
}

