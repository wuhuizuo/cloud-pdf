var express = require('express')
var app = express();

app.listen(process.env.PORT, process.env.IP, function() {
  console.log('Server started on ' + process.env.IP + ':' + process.env.PORT)
});
app.use('/viewer', express.static('viewer'));

app.get('/', function(req, res){
  res.send('Index page!'); 
});