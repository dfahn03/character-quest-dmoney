import mongoose from 'mongoose'

//PRIVATE
let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String }
}, { timestamps: true })

//PUBLIC
export default class ProfessionService {
  get repository() {
    return mongoose.model('profession', _schema)
  }
}