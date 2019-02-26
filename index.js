const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(4000, () => console.log("listening on port 4000"));
