
/**
 * Module dependencies.
 */

var express = require('express');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());


app.get('/hello/:name', function(req,res){
  res.writeHead(200, {
    'Content-Type': 'text/plain'
    ,'Transfer-Encoding': 'chunked'
  });
  res.write("Starting chunked Response\n");
  res.write('Hello\n');
  setTimeout(function(){
    res.write(' After 1 sec World\n');
    name = req.params.name;
    res.write('     Name:' + name +' \n');
    res.end();
  }, 1000);

});

app.post('/k4', function(req,res){
  console.log("JSON:" +  JSON.stringify(req[body]));
  res.writeHead(200, {
    'Content-Type': 'text/plain'
    ,'Transfer-Encoding': 'chunked'
    ,'Set-Cookie':'test=test'
  });
  res.write('{"a":"b"}');
  res.end();
});

app.get('/loaderio-ab099d3c2087287f3cf53cbeeb69693f.txt', function(req,res){
 res.send("loaderio-ab099d3c2087287f3cf53cbeeb69693f");
});
app.get('/t', function(req,res){
  res.writeHead(200, {
    'Content-Type': 'text/plain'
    ,'Transfer-Encoding': 'chunked'
    ,'Set-Cookie':'test=test'
  });
  res.write('Hello testit\n');
  res.end();
});
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Express server listening on port ' + app.get('port'));
});
