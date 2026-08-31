import Story from '../models/Story.js'; export default (await import('./resourceController.js')).resource(Story, { active: true })
