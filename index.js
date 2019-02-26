const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(require("./routes/index.js"));

app.listen(4000, () => console.log("listening on port 4000"));
