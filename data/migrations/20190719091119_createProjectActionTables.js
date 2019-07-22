
exports.up = function(knex) {
  return knex.schema
            .createTable('projects', tbl =>{
                tbl.increments()
                tbl.string('project_name')
                    .unique()
                    .notNullable()
                tbl.text('project_description')
                    .notNullable()
                tbl.boolean('project_completed')
                    .notNullable()
                    .defaultTo(false)
            })
            .createTable('actions', tbl => {
                tbl.increments()
                tbl.text('action_description')
                    .notNullable()
                tbl.integer('project_id')
                    .unsigned()
                    .references('projects.id')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE')
                tbl.text('action_notes')
                tbl.boolean('action_completed')
                    .notNullable()
                    .defaultTo(false)
            })
};

exports.down = function(knex) {
  return knex.schema
             .dropTableIfExists('projects')
             .dropTableIfExists('actions')
};
