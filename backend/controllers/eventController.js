import Event from '../models/Event.js'; export default (await import('./resourceController.js')).resource(Event, { active: true })
