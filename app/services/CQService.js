import mongoose from 'mongoose'

//PRIVATE
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  characterId: { type: ObjectId, ref: 'character', required: true },
  questId: { type: ObjectId, ref: 'quest', required: true },
  status: { type: String, enum: ['completed', 'active', 'failed'], required: true, default: 'active' },

}, { timestamps: true })

//PUBLIC
export default class CQService {
  get repository() {
    return mongoose.model('cq', _schema)
  }
}