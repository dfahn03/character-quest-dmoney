import express from 'express'
import ProfessionService from '../services/ProfessionService'

//PRIVATE
let _professionService = new ProfessionService()
let _repo = _professionService.repository

//PUBLIC
export default class ProfessionController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllProfessions)
      .get('/:id', this.getProfessionById)
      .put('/:id', this.editProfession)
      .post('', this.createProfession)
      .delete('/:id', this.deleteProfession)
      .use('*', this.defaultRoute)
  }

  async getAllProfessions(req, res, next) {
    try {
      let professions = await _repo.find({})
      return res.send(professions)
    } catch (error) { next(error) }
  }
  async getProfessionById(req, res, next) {
    try {
      let profession = await _repo.findOne({ _id: req.params.id })
      return res.send(profession)
    } catch (error) { next(error) }
  }
  async editProfession(req, res, next) {
    try {
      let profession = await _repo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      if (profession) {
        return res.send(profession)
      }
      throw new Error('Invalid Character Id')
    } catch (error) { next(error) }
  }
  async createProfession(req, res, next) {
    try {
      let profession = await _repo.create(req.body)
      return res.status(201).send(profession)
    } catch (error) { next(error) }
  }
  async deleteProfession(req, res, next) {
    try {
      let professions = await _repo.findOneAndDelete({ _id: req.params.id })
    } catch (error) { next(error) }
  }

  defaultRoute(req, res, next) {
    next({ status: 400, message: 'no such profession' })
  }

}