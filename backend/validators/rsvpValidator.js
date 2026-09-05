import { body } from 'express-validator'
import { RSVP_ATTENDANCE, RSVP_STATUSES } from '../utils/constants.js'

export const createRsvpValidation = [body('name').trim().isLength({ min: 1, max: 100 }).withMessage('Name is required'), body('attending').isIn(RSVP_ATTENDANCE).withMessage('Attendance must be yes, no, or maybe'), body('email').optional({ values: 'falsy' }).isEmail().withMessage('A valid email is required'), body('phone').optional({ values: 'falsy' }).trim().isLength({ max: 30 }), body('guests').optional().isInt({ min: 0, max: 20 }).toInt(), body('message').optional().trim().isLength({ max: 1000 })]
export const updateRsvpValidation = [body('status').optional().isIn(RSVP_STATUSES), body('attending').optional().isIn(RSVP_ATTENDANCE), body('guests').optional().isInt({ min: 0, max: 20 }).toInt()]
