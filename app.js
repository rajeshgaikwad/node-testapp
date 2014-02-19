
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
//app.use(express.cookieParser('your secret key here'));
//app.use(express.session());
//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));

// development only
//if ('development' == app.get('env')) {
  //app.use(express.errorHandler());
//}

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
  res.writeHead(200, {
    'Content-Type': 'text/plain'
    ,'Transfer-Encoding': 'chunked'
    ,'Set-Cookie':'test=test'
  });
  res.write('Hello testit\n');
  res.end();
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

server =http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



//server.on('connection', function(socket) {
  
//console.log("A new connection was made by a client.");
//..      socket.setTimeout(1 * 1000); 
//        // 30 second timeout. Change this as you see fit.
// })
