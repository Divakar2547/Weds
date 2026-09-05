import { Router } from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { adminOnly } from '../middleware/adminMiddleware.js'
import { validate } from '../middleware/validationMiddleware.js'

export default function resourceRoutes(controller, validation = []) {
  const router = Router()
  router.get('/', controller.list)
  router.post('/', protect, adminOnly, validation, validate, controller.create)
  router.patch('/:id', protect, adminOnly, controller.update)
  router.delete('/:id', protect, adminOnly, controller.remove)
  return router
}
