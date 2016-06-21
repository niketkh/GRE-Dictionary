var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var words = require('./routes/words');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

app.get('/', function(request, response){
	response.send('Please use /api/words');
});

app.use('/api/words', words);
app.listen(3000);

console.log('Server is running on port 3000...');