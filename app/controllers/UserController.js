import express from 'express'
import UserService from '../services/UserService'

let _userService = new UserService()
let _repo = _userService.repository




export default class UserController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllUsers)
  }

  async getAllUsers(req,res,next) {
    try {
      
    } catch (error) {
      
    }
  }
  async getUserById(req,res,next) {
    try {
      
    } catch (error) {
      
    }
  }
  async editUser(req,res,next) {
    try {
      
    } catch (error) {
      
    }
  }
  async createUser(req,res,next) {
    try {
      
    } catch (error) {
      
    }
  }
  async deleteUser(req,res,next) {
    try {
      
    } catch (error) {
      
    }
  }

}