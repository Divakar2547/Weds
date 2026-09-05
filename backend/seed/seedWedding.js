import Wedding from '../models/Wedding.js'

export default async function seedWedding() {
  await Wedding.findOneAndUpdate({}, { groomName: 'Sankar Kumar', brideName: 'Hari Priya', weddingDate: '2026-11-14', message: 'With grateful hearts and the blessings of our beloved families, we invite you to share in the beginning of our new chapter together.' }, { upsert: true, new: true, setDefaultsOnInsert: true })
}
