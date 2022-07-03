// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const port = 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  const sum = parseInt(req.body.value1) + parseInt(req.body.value2);
  res.json({ answer: sum });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
