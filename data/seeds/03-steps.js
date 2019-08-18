
exports.seed = function(knex, Promise) {
  return knex('steps').insert([   
    { step_number: 1, recipe_id: 1, description: 'Learn how to make an api' },
    { step_number: 1, recipe_id: 2, description: 'Practice everyday' }
  ]);
};
