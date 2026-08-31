import mongoose from 'mongoose'
export default mongoose.model('Wedding', new mongoose.Schema({ groomName: { type: String, required: true }, brideName: { type: String, required: true }, weddingDate: Date, heroImage: String, message: String }, { timestamps: true, versionKey: false }))
