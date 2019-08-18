
const cleaner = require('knex-cleaner');

exports.seed = async function(knex) {
  console.log('cleaning!');
  
  try {
    await knex.truncate('zoo_animals');
    await knex.truncate('animals');
    await knex.truncate('species');
    await knex.truncate('zoos');

  } catch (err) {
    console.log(err);
  }
  
};
