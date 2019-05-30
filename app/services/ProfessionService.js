import mongoose from 'mongoose'

let _schema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type:String}
})


export default class ProfessionService {
  get repository() {
    return mongoose.model('profession', _schema)
  }
}