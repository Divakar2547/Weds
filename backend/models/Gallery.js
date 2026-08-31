import mongoose from 'mongoose'
export default mongoose.model('Gallery', new mongoose.Schema({ imageUrl: { type: String, required: true }, caption: String, order: { type: Number, default: 0 }, active: { type: Boolean, default: true } }, { timestamps: true, versionKey: false }))
