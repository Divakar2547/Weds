import { uploadImage } from '../services/cloudinaryService.js'

export const upload = async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'An image file is required' })
    const cloudUrl = await uploadImage(req.file)
    const url = cloudUrl || `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
    res.status(201).json({ url })
  } catch (error) { next(error) }
}
