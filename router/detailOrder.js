const express = require('express')
var router = express.Router()
const database = require('../models/')

//show table detail order
router.get('/', function(req,res){
  database.detailOrder.findAll({
    order:[['id']]
  })
  .then((result) =>{
    res.render('detailOrder', {dataDetailOrder:result})
  })
})


module.exports = router
