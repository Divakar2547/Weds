import mongoose from 'mongoose'
export default mongoose.model('Story', new mongoose.Schema({ title: { type: String, required: true }, content: String, imageUrl: String, date: Date, order: { type: Number, default: 0 }, active: { type: Boolean, default: true } }, { timestamps: true, versionKey: false }))
