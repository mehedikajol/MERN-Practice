const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoutes = require("./routes/categories");

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
app.use("/backend/users", usersRoute);
app.use("/backend/posts", postsRoute);
app.use("/backend/categories", categoriesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Backend is running in port ${process.env.PORT}`);
});
