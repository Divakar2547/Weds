import { Router } from 'express'
import { protect } from '../middleware/authMiddleware.js'
export default function resourceRoutes(controller) { const router = Router(); router.get('/', controller.list); router.post('/', protect, controller.create); router.patch('/:id', protect, controller.update); router.delete('/:id', protect, controller.remove); return router }
