
exports.up = function(knex) {
  return knex.schema
            .createTable('contexts', tbl=> {
                tbl.increments()
                tbl.text('context_name')
                    .unique()
                    .notNullable()
            })
            .createTable('context_details', tbl=> {
                tbl.increments()
                tbl.integer('action_id')
                    .unsigned()
                    .references('actions.id')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE')
                tbl.integer('context_id')
                    .unsigned()
                    .references('contexts.id')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE')
            })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('contexts')
    .dropTableIfExists('context_details')
};
