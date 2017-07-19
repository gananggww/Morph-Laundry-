const express = require('express');
var router = express.Router();
const database = require('../models');

//show data user
router.get('/', function(req, res){
  database.User.findAll({
    order: [["id"]]
  })
  .then((result) =>{
    res.render('userEjs', {userData:result})
  })
})
//add form
router.get('/order', function(req, res){
  res.render('orderStuff')
})

module.exports = router;
