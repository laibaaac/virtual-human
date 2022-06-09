
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT ||4000
mongoose = require("mongoose"),
passport = require("passport"),
bodyParser = require("body-parser"),
//const dotenv = require('dotenv').config();
//const {
 // MongoClient
//} = require('mongodb');
//const {
//ObjectID } = require('mongodb'); 

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs', 'html');

app.get('/', function(req, res) {
    
    res.render('index', {
     
    });
  });


  app.get("/start", async (req, res) => {
  
    res.render("start");
  
  });


  app.get("/list", async (req, res) => {
  
    res.render("list");
  
  });

 app.get("/login", async (req, res) => {
  
    res.render("login");
  
  });


  app.get("/avatar", async (req, res) => {
  
    res.render("avatar");
  
  });
  app.get("/avataar", async (req, res) => {
  
    res.render("avataar");
  
  });
  app.use(express.static("public"));


 
  /*async function connectDB() {
    const uri = process.env.DB_URI;
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    try {
      await client.connect();
      db = client.db(process.env.DB_NAME);
    } catch (error) {
      throw error;
    }
  }*/


app.listen(port, () => {
  console.log(`web server running on http://localhost:${port}}`)
})
