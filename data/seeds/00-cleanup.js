
const cleaner = require('knex-cleaner');

exports.seed = async function(knex) {
  console.log('cleaning!');
  
  try {
    await knex.truncate('recipes_ingredients');
    await knex.truncate('steps');
    await knex.truncate('ingredients');
    await knex.truncate('recipes');

  } catch (err) {
    console.log(err);
  }
  
};
