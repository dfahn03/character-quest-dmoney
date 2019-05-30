import express from 'express'
import UserService from '../services/UserService'

//PRIVATE
let _userService = new UserService()
let _repo = _userService.repository



//PUBLIC
export default class UserController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllUsers)
      .get('/:name', this.getUserByName)
      .put('/:id', this.editUser)
      .post('', this.createUser)
      .delete('/:id', this.deleteUser)
      .use('*', this.defaultRoute)
  }

  async getAllUsers(req, res, next) {
    try {
      let users = await _repo.find({})
      return res.send(users)
    } catch (error) { next(error) }
  }
  async getUserByName(req, res, next) {
    try {
      let user = await _repo.findOne({ name: req.params.name })
      return res.send(user)
    } catch (error) { next(error) }
  }
  async editUser(req, res, next) {
    try {
      let user = await _repo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      if (user) {
        return res.send(user)
      }
      throw new Error('Invalid Character Id')
    } catch (error) { next(error) }
  }
  async createUser(req, res, next) {
    try {
      let user = await _repo.create(req.body)
      return res.status(201).send(user)
    } catch (error) { next(error) }
  }
  async deleteUser(req, res, next) {
    try {
      let users = await _repo.findOneAndDelete({ _id: req.params.id })
      return res.send('Succesfully Deleted')
    } catch (error) { next(error) }
  }

  defaultRoute(req, res, next) {
    next({ status: 400, message: 'No Such User' })
  }

}