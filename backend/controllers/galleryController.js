import Gallery from '../models/Gallery.js'; export default (await import('./resourceController.js')).resource(Gallery, { active: true })
