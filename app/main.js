import express from 'express'
import './db/dbconfig'
let port = 3000
let server = express()
let bp = require('body-parser')

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

//register routes




server.use((error, req, res, next) =>{
  res.status(error.status || 400).send({error:{message: error.message}})
})
server.listen(port, ()=> {
  console.log('server running', port)
})