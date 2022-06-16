const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;
bodyParser = require("body-parser");

app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs", "html");

const auth = require("basic-auth");
const compare = require("tsscmp");

const check = (name, pass) => {
  let valid = true;
  valid = compare(name, "virtuallyhuman") && valid;
  valid = compare(pass, "0000") && valid;
  return valid;
};

const basicAuth = (req, res, next) => {
  const credentials = auth(req);
  if (credentials && check(credentials.name, credentials.pass)) {
    return next();
  }

  res.set("WWW-authenticate", 'Basic realm="someSite"');
  return res.status(401).send("unauthorized");
};

app.use(basicAuth);

app.get("/", function (req, res) {


  res.render("index", {});
});


app.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});


app.get("/start", async (req, res) => {
  res.render("start");
});


app.get("/list", async (req, res) => {
  res.render("list");
});


app.get("/avatar", async (req, res) => {
  res.render("avatar");
});


app.get("/avataar", async (req, res) => {
  res.render("avataar");
});
app.use(express.static("public"));


app.listen(port, () => {
  console.log(`web server running on http://localhost:${port}}`);
});