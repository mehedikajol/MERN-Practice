const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoutes = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images/", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to databse"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/backend/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File uploaded successfully");
});

app.use("/backend/auth", authRoute);
app.use("/backend/users", usersRoute);
app.use("/backend/posts", postsRoute);
app.use("/backend/categories", categoriesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Backend is running in port ${process.env.PORT}`);
});
