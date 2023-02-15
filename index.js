const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("./api/config/db").connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(8000, () => {
  console.log("Server is listening at 8000");
});
