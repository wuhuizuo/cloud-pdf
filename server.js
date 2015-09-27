var express = require('express')
var app = express();

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), function() {
  console.log('Server started on ' + app.get('port'))
});

app.use('/viewer', express.static('viewer'));
app.use('/books', express.static('books'));
app.use(express.static('static'))

app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found!');
});
app.use(function(err, req, res, next) {
  console.log(err.stack)
  res.type('text/plain');
  res.status(500);
  res.send('500- Server Error' + err.message)
});

app.get('/', function(req, res) {
  res.send('Index page!');
});
