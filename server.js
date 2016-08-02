var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(1234, function() {
	console.log('server is listening on port 1234');
  console.log('go to http://localhost:1234 from your browser');
});
