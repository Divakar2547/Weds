import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
export const login = async (req, res, next) => { try { const user = await User.findOne({ email: req.body.email?.toLowerCase() }).select('+password'); if (!user || !await bcrypt.compare(req.body.password || '', user.password)) return res.status(401).json({ message: 'Invalid email or password' }); res.json({ token: jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }), user: { id: user.id, email: user.email, role: user.role } }) } catch (e) { next(e) } }
export const me = async (req, res, next) => { try { const user = await User.findById(req.user.id); if (!user) return res.status(401).json({ message: 'User not found' }); res.json(user) } catch (e) { next(e) } }
