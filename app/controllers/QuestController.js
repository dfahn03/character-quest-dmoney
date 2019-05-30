import express from 'express'
import QuestService from '../services/QuestService'

//PRIVATE
let _questService = new QuestService()
let _repo = _questService.repository

//PUBLIC
export default class QuestController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllQuests)
      .get('/:id', this.getQuestById)
      .put('/:id', this.editQuest)
      .post('', this.createQuest)
      .delete('/:id', this.deleteQuest)
      .use('*', this.defaultRoute)
  }

  async getAllQuests(req, res, next) {
    try {
      let quests = await _repo.find({})
      return res.send(quests)
    } catch (error) { next(error) }
  }
  async getQuestById(req, res, next) {
    try {
      let quest = await _repo.findOne({ _id: req.params.id })
      return res.send(quest)
    } catch (error) { next(error) }
  }
  async editQuest(req, res, next) {
    try {
      let quest = await _repo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      if (quest) {
        return res.send(quest)
      }
      throw new Error('Invalid Character Id')
    } catch (error) {

    }
  }
  async createQuest(req, res, next) {
    try {
      let quest = await _repo.create(req.body)
      return res.status(201).send(quest)
    } catch (error) { next(error) }
  }
  async deleteQuest(req, res, next) {
    try {
      let quests = await _repo.findOneAndDelete({ _id: req.params.id })
    } catch (error) {

    }
  }

  defaultRoute(req, res, next) {
    next({ status: 400, message: 'No Such Quest' })
  }

}