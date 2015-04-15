/* jshint node:true */
// server.js

var express = require('express');
var app = express();
var router = require('./server/router');

// configure the server
var port = process.env.PORT || 8080;
router.init(app);

app.use(express.static('.' + '/public'));

// start the server
app.listen(port);
console.log('Server started on port: ' + port);