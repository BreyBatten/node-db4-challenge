const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('ingredients as i')
        .join('recipes_ingredients', 'i.id', 'recipes_ingredients.ingredient_id')
        .where('recipes_ingredients_id', recipe_id)
        .select('i.name', 'i.qty')
        .orderBy('i.name', 'asc');
}

function getInstructions(recipe_id) {
    return db('steps')
        .where({ recipe_id })
        .select('step_number', 'description')
        .orderBy('step_number', 'asc');
}