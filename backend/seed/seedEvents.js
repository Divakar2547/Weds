import Event from '../models/Event.js'

export default async function seedEvents() {
  const events = [
    { name: 'Engagement', tamilName: 'நிச்சயதார்த்தம்', number: 1, active: true },
    { name: 'Wedding', tamilName: 'திருமணம்', number: 2, active: true },
    { name: 'Reception', tamilName: 'வரவேற்பு', number: 3, date: '2026-11-14', time: '6:00 PM – 9:00 PM', active: true },
  ]
  await Promise.all(events.map((event) => Event.findOneAndUpdate({ name: event.name }, event, { upsert: true, new: true, setDefaultsOnInsert: true })))
}
