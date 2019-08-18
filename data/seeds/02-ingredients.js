
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { name: 'NodeJS', qty: 1 },
    { name: 'Dedication', qty: 100 }
  ]);
};
