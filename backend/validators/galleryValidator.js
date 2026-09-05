import { body } from 'express-validator'

export const galleryValidation = [body('imageUrl').isURL().withMessage('A valid image URL is required'), body('caption').optional().trim().isLength({ max: 300 }), body('order').optional().isInt({ min: 0 }), body('active').optional().isBoolean().toBoolean()]
