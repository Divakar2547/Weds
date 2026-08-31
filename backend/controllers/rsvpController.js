import RSVP from '../models/RSVP.js'
export const createRsvp = async (req, res, next) => { try { if (!req.body.name || !['yes', 'no', 'maybe'].includes(req.body.attending)) return res.status(400).json({ message: 'Name and attendance are required' }); res.status(201).json(await RSVP.create(req.body)) } catch (e) { next(e) } }
export const listRsvps = async (_req, res, next) => { try { res.json(await RSVP.find().sort({ createdAt: -1 })) } catch (e) { next(e) } }
export const updateRsvp = async (req, res, next) => { try { const item = await RSVP.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); if (!item) return res.status(404).json({ message: 'Not found' }); res.json(item) } catch (e) { next(e) } }
export const deleteRsvp = async (req, res, next) => { try { if (!await RSVP.findByIdAndDelete(req.params.id)) return res.status(404).json({ message: 'Not found' }); res.status(204).end() } catch (e) { next(e) } }
