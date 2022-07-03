const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;
bodyParser = require("body-parser");

app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs", "html");



app.get("/start", async (req, res) => {
  res.render("start");
});


app.get("/list", async (req, res) => {
  res.render("list");
});


app.get("/avatar", async (req, res) => {
  res.render("avatar");
});

app.use(express.static("public"));


app.listen(port, () => {
  console.log(`web server running on http://localhost:${port}}`);
});