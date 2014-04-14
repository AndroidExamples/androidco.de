var config = require('./config');

// let's use this service also for serving all this data
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// Express settings
//app.disable('x-powered-by');

// Configuration
app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(express.cookieParser(config.secret));
//app.use(express.session());
//app.use(app.router);

app.use(express.static(path.join(__dirname, 'public'))); // this ensures all files in public folder are served

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

http.createServer(app).listen(config.port, function() {
    console.log("Express server listening on port %d in %s mode", config.port, app.settings.env);
});
