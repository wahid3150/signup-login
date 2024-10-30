const express = require("express");
require("dotenv").config();
const connectDB = require("./Config/Connection");
const authRouts = require("./Routes/authRouts");

const app = express();
connectDB();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", authRouts);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "SERVER error, please try again later" });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
