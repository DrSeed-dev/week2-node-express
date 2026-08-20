require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("My Week 2 API!");
});

app.get("/page", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Missing required fields: name and email");
  }

  res.send(`Hello, ${name}!`);
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} profile`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});