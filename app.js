
const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")

app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


let stuffRoute = require("./router/stuffRouter")
app.use("/stuff", stuffRoute)

const clients = require('./router/clientRouter')
app.use('/client', clients);

const detailOrders = require('./router/detailOrder')
app.use('/detailorder', detailOrders)

const users = require('./router/userRouter')
app.use('/user', users)

app.listen(3000);
