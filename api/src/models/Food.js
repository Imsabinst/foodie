const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const FoodModel = mongoose.model("fooddetails", FoodSchema);

module.exports = FoodModel;
