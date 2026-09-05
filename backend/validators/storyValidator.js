import { body } from 'express-validator'

export const storyValidation = [body('title').trim().isLength({ min: 1, max: 160 }), body('content').optional().trim().isLength({ max: 5000 }), body('imageUrl').optional({ values: 'falsy' }).isURL(), body('date').optional({ values: 'falsy' }).isISO8601(), body('order').optional().isInt({ min: 0 }), body('active').optional().isBoolean().toBoolean()]
