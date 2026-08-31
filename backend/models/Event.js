import mongoose from 'mongoose'
export default mongoose.model('Event', new mongoose.Schema({ name: { type: String, required: true }, tamilName: String, date: Date, time: String, venue: String, address: String, mapUrl: String, number: Number, active: { type: Boolean, default: true } }, { timestamps: true, versionKey: false }))
