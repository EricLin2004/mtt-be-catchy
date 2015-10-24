var path = require('path');
var express = require('express');
var app = require('./src/lib/app');

app.use(express.static(path.join(__dirname, 'files')));

app.listen(process.env.PORT || 3000)