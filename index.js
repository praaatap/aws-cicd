const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps 🚀");
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get('/live', (req, res) => {
  res.status(200).json({ status: "live" });
}

app.get('/ready', (req, res) => {
  res.status(200).json({ status: "ready" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});