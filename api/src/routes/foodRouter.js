const express = require("express");
const FoodModel = require("../models/Food");
const app = express();

app.get("/foods", async (request, response) => {
  const foods = await FoodModel.find({});

  try {
    response.send(foods);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/addFood", async (request, response) => {
  const food = new FoodModel(request.body);

  try {
    await food.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/updateFood/:id", async (request, response) => {
  try {
    await FoodModel.findByIdAndUpdate(request.params.id, request.body);
    await FoodModel.save();
    response.send(food);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/deleteFood/:id", async (request, response) => {
  try {
    const food = await FoodModel.findByIdAndDelete(request.params.id);

    if (!food) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
