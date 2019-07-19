const db = require('../data/dbConfig');

module.exports = {
    getProject: function() {
        return db('projects')
    },
    
    getProjectId: function(id) {
        return db('projects')
                .where({id})
                .first()
                .then((ids)=>{
                    if(!ids) return null
                })
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
                .select("action_description", "action_notes", "id", "action_completed")
                .where({project_id})
    },

    updateProject: function(project,id) {
        return db('products')
                .update(project)
                .where({id})
                .then((ids)=>{
                    if(ids>0) {
                        return this.getProjectId(id)
                    }
                })
    },

    deleteProject: function(id) {
        const project = this.getProjectId(id)
        return db('projects')
                .del()
                .where({id})
                .then(()=> project)
    }
}

