import { body } from 'express-validator'

export const weddingValidation = [body('groomName').trim().isLength({ min: 1, max: 100 }), body('brideName').trim().isLength({ min: 1, max: 100 }), body('weddingDate').optional({ values: 'falsy' }).isISO8601(), body('heroImage').optional({ values: 'falsy' }).isURL(), body('message').optional().trim().isLength({ max: 2000 })]
