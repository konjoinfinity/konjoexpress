const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(require("./routes/index.js"));

app.listen(4000, () => console.log("listening on port 4000"));
