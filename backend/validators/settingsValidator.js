import { body } from 'express-validator'

export const settingsValidation = [body('key').trim().matches(/^[a-zA-Z0-9_.-]+$/).withMessage('Settings key contains invalid characters'), body('value').exists().withMessage('A value is required')]
