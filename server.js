var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});
app.get('/poisedmallard', function(request, response){
    response.send('Poised Mallard');
});
app.get('/poisedmallard', function(request, response){
    response.send('Poised Mallard');
});
app.listen(process.env.PORT || 4000);