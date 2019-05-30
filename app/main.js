import express from 'express'
import './db/dbconfig'
let port = 3000
let server = express()
let bp = require('body-parser')

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

//register routes
import UserController from './controllers/UserController'
import ProfessionController from './controllers/ProfessionController'


server.use('/api/users', new UserController().router)
server.use('/api/professions', new ProfessionController().router)



server.use((error, req, res, next) =>{
  res.status(error.status || 400).send({error:{message: error.message}})
})
server.listen(port, ()=> {
  console.log('server running', port)
})