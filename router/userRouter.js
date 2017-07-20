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
router.get('/order/:id', function(req, res){
  database.detailOrder.findAll({
    attributes:['id','clientId', 'stuffId', 'createdAt', 'updatedAt' ,'quantity', 'userId'],
    include:[{all:true}]

  })
  .then((data)=>{
    database.Stuff.findAll()
    .then((dataStuff)=>{
      res.render('orderStuff', {allData:data, user:req.params.id, allStuff:dataStuff});
    })
  })
})

// res.render('orderStuff', {userData:data, detailData:detail ,stuff:dataStuff})

//add order
router.post('/order/:id', function(req, res){
  database.detailOrder.create({
    stuffId: req.body.typeStuff,
    quantity: req.body.quantity,
    createAt: new Date(),
    updatedAt: new Date()
  })
  .then(()=>{
    res.redirect(`/user/order/${req.params.id}`)
  })
})
//delete order
router.get('/delete/:id', function(req,res){
  database.detailOrder.destroy({where:{id:req.params.id}})
  .then(()=>{
    res.redirect(`/user/order/${req.params.id}`)
  })
})

module.exports = router;
