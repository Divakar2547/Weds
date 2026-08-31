import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import connectDb from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import weddingRoutes from './routes/weddingRoutes.js'
import eventRoutes from './routes/eventRoutes.js'
import storyRoutes from './routes/storyRoutes.js'
import galleryRoutes from './routes/galleryRoutes.js'
import settingsRoutes from './routes/settingsRoutes.js'
import rsvpRoutes from './routes/rsvpRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const app = express()
app.use(helmet(), cors({ origin: (process.env.CLIENT_URL || 'http://localhost:5173').split(','), credentials: true }), express.json({ limit: '1mb' }), morgan('dev'))
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, limit: 300 }))
app.get('/health', (_req, res) => res.json({ ok: true }))
app.use('/api/auth', authRoutes); app.use('/api/weddings', weddingRoutes); app.use('/api/events', eventRoutes); app.use('/api/stories', storyRoutes); app.use('/api/gallery', galleryRoutes); app.use('/api/settings', settingsRoutes); app.use('/api/rsvps', rsvpRoutes)
app.use(notFound, errorHandler)
if (process.env.NODE_ENV !== 'test') connectDb().then(() => app.listen(process.env.PORT || 5000, () => console.log(`API running on port ${process.env.PORT || 5000}`))).catch((error) => { console.error(error.message); process.exit(1) })
export default app
