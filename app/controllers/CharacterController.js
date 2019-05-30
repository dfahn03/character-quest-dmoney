import express from 'express'
import CharacterService from '../services/CharacterService'

let _characterService = new CharacterService()
let _repo = _characterService.repository

export default class CharacterController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllCharacters)
      .get('/:id', this.getCharacterById)
      .put('/:id', this.editCharacter)
      .post('', this.createCharacter)
      .delete('/:id', this.deleteCharacter)
      .use('*', this.defaultRoute)
  }

  async getAllCharacters(req,res,next) {
    try {
      let characters = await _repo.find({})
      return res.send(characters)
    } catch (error) {next(error)}
  }
  async getCharacterById(req,res,next) {
    try {
      let character = await _repo.findOne({_id: req.params.id})
      return res.send(character)
    } catch (error) {next(error)}
  }
  async editCharacter(req,res,next) {
    try {
      let characters = await _repo
    } catch (error) {
      
    }
  }
  async createCharacter(req,res,next) {
    try {
      let character = await _repo.create(req.body)
      return res.status(201).send(character)
    } catch (error) {next(error)
      
    }
  }
  async deleteCharacter(req,res,next) {
    try {
      let characters = await _repo
    } catch (error) {
      
    }
  }

  defaultRoute(req, res, next){
    next({status: 400, message: 'no such character'})
  }

}