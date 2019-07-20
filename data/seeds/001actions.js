
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_description:"Pick up", project_id: '1'},
        {action_description:"Buy stuffs", project_id: '1'},
        {action_description:"Withdraw money", project_id: '1'}
      ]);
    });
};
