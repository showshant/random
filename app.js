const express = require("express");

const app = express();

app.use("/hello/2", (req, res) => {
  res.send("ABra ka dabra");
});
app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello!");
});
app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/", (req, res) => {
  res.send("Namaste Sushant");
});
app.listen(3000, () => {
  console.log("server is successfully listening on port 3000...");
});
