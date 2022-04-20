
const express = require('express')
const app = express()
const port = 4000
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs', 'html');

app.get('/', function(req, res) {
    
    res.render('index.ejs', {
     
    });
  });

  app.use(express.static("public"));


app.listen(port, () => {
  console.log(`web server running on http://localhost:${port}}`)
})
