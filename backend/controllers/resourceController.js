export const resource = (Model, filter = {}) => ({
  list: async (_req, res, next) => { try { res.json(await Model.find(filter).sort({ order: 1, number: 1, createdAt: -1 })) } catch (e) { next(e) } },
  create: async (req, res, next) => { try { res.status(201).json(await Model.create(req.body)) } catch (e) { next(e) } },
  update: async (req, res, next) => { try { const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); if (!item) return res.status(404).json({ message: 'Not found' }); res.json(item) } catch (e) { next(e) } },
  remove: async (req, res, next) => { try { if (!await Model.findByIdAndDelete(req.params.id)) return res.status(404).json({ message: 'Not found' }); res.status(204).end() } catch (e) { next(e) } }
})
