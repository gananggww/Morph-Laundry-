const express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//var session = require('express-session');

app.set('view engine', 'ejs');

app.use(bodyParser.json()); // digunakan saat menjalankan fungsi POST
app.use(bodyParser.urlencoded({
  extended: true
})); // hasil post di encoded

const clients = require('./router/clientRouter')
app.use('/client', clients);
const detailOrders = require('./router/detailOrder')
app.use('/detailorder', detailOrders)
app.listen(3000);
