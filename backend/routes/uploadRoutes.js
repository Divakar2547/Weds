import { Router } from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'
import { uploadImage } from '../middleware/uploadMiddleware.js'
import { upload } from '../controllers/uploadController.js'

const router = Router()
router.post('/image', protect, adminOnly, uploadImage.single('image'), upload)
export default router
