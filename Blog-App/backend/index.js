const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to databse"))
  .catch((err) => console.log(err));

app.use("/backend/auth", authRoute);

app.listen("5000", () => {
  console.log("Backend is running in port 5000");
});
