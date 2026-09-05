import { body } from 'express-validator'

export const eventValidation = [body('name').trim().isLength({ min: 1, max: 120 }), body('date').optional({ values: 'falsy' }).isISO8601(), body('time').optional().trim().isLength({ max: 80 }), body('venue').optional().trim().isLength({ max: 200 }), body('address').optional().trim().isLength({ max: 500 }), body('mapUrl').optional({ values: 'falsy' }).isURL(), body('number').optional().isInt({ min: 0 }), body('active').optional().isBoolean().toBoolean()]
