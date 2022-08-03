const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRouter");
const dotenv = require("dotenv");

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({ path: ".env" });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(foodRouter);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log("Server is running..." + PORT + "..");
});
