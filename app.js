const express = require("express");

const app = express();

const rateLimitMiddleware = require("./middleware");

app.use(rateLimitMiddleware);

app.get("/home", (req, res) => {
  res.end("<div><h1>Hello World</h1></div>");
});

app.listen(3000, () => {
  console.log("Port is listening at 3000");
});
