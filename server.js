const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT ||4000
bodyParser = require("body-parser");
const auth = require('basic-auth');
const compare = require('tsscmp'); 




app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs', 'html');

app.get('/', function(req, res) {
  
//var password = "0000";

/*function passcheck() {
    if(document.getElementById('pass1').value !=password){
        alert('Wrong password, Try again.')
        return false;
        return next();
    }
    if(document.getElementById('pass1').value ==password){
        res.redirect('/dashboard');
    }
*/ 


  res.render('index', {
  });
 
}


);

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
  console.log(`web server running on http://localhost:${port}}`)
})
