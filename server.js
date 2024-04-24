const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const toDoRoutes = require("./routes/ToDoRoutes");
require("dotenv").config();

const PORT = 8000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/todo", toDoRoutes);
mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    console.log("DB Connected Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
