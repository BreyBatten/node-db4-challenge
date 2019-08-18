
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { name: 'Backend', description: 'How to make a DB' },
    { name: 'Recipe2', description: 'How to make a software dev' }
  ]);
};
