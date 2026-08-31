import Wedding from '../models/Wedding.js'
export const getWedding = async (_req, res, next) => { try { res.json(await Wedding.findOne().sort({ createdAt: -1 })) } catch (e) { next(e) } }
export const saveWedding = async (req, res, next) => { try { const item = await Wedding.findOneAndUpdate({}, req.body, { new: true, upsert: true, runValidators: true }); res.json(item) } catch (e) { next(e) } }
