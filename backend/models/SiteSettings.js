import mongoose from 'mongoose'
export default mongoose.model('SiteSettings', new mongoose.Schema({ key: { type: String, required: true, unique: true }, value: mongoose.Schema.Types.Mixed }, { timestamps: true, versionKey: false }))
