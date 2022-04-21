
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs', 'html');

app.use(express.static("public"));



app.get('/', function(req, res) {
    
    res.render('index.ejs', {
     
    });
  });
 



app.listen(port, () => {
  console.log(`web server running on http://localhost:${port}}`)
})
