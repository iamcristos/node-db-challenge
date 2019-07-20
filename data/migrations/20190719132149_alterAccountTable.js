
exports.up = function(knex) {
//   return knex.schema
//              .alterTable('actions', tbl =>{
//                  tbl.dropUnique('action_description')
//                  tbl.integer('project_id')
//                  .unsigned()
//                  .references('projects.id')
//                  .onUpdate('CASCADE')
//                  .onDelete('CASCADE')
//                  .alter()
//              })
};

exports.down = function(knex) {
//   return knex.schema.alterTable('actions', tbl =>{
//       tbl.unique('action_description')
//   })
};
