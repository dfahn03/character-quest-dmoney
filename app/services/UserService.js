import mongoose from 'mongoose'

//PRIVATE
let _schema = new mongoose.Schema({
  name: { type: String, required: true }
}, { timestamps: true })

//PUBLIC
export default class UserService {
  get repository() {
    return mongoose.model('user', _schema)
  }
}