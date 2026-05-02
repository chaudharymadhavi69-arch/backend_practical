const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 0.01 },
  isAvailable: { type: Boolean, default: true }
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
