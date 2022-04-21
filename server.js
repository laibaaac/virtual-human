
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT ||4000
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs', 'html');

app.get('/', function(req, res) {
    
    res.render('/', {
     
    });
  });


  app.get("/start", async (req, res) => {
  
    res.render("start");
  
  });


  app.get("/list", async (req, res) => {
  
    res.render("list");
  
  });

  app.use(express.static("public"));




app.listen(port, () => {
  console.log(`web server running on http://localhost:${port}}`)
})
