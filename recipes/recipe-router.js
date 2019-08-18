const express = require('express');

const Recipes = require('./recipe-model.js');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Could not get recipes' });
    }
});

router.get('/:id/shoppingList', async (req, res) => {
    const { id } = req.params;

    try {
        const shoppingList = await Recipes.getShoppingList(id);
        res.status(200).json(shoppingList);
    } catch (error) {
        res.status(500).json({ message: 'Could not get ingredients' });
    }
});

router.get('/:id/instructions', async (req, res) => {
    const { id } = req.params;

    try {
        const instructions = await Recipes.getInstructions(id);
        res.status(200).json(instructions);
    } catch (error) {
        res.status(500).json({ message: 'Could not get instructions' });
    }
});

module.exports = router;