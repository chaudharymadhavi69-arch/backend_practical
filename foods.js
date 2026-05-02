const express = require('express');
const Food = require('../models/Food');

const router = express.Router();

// POST /foods
router.post('/', async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /foods
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /foods/available (MUST be before /:id)
router.get('/available', async (req, res) => {
  try {
    const foods = await Food.find({ isAvailable: true });
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /foods/:id
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ error: 'Food not found' });
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /foods/:id
router.put('/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!food) return res.status(404).json({ error: 'Food not found' });
    res.json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /foods/:id
router.delete('/:id', async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).json({ error: 'Food not found' });
    res.json({ message: 'Food deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
