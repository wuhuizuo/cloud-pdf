var express = require('express')
var app = express();

app.listen(process.env.PORT, process.env.IP, function() {
  console.log('Server started on ' + process.env.IP + ':' + process.env.PORT)
});
app.use(express.static('static'));