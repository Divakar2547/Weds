import User from '../models/User.js'
import { hashPassword } from '../utils/hashPassword.js'

export default async function seedAdmin() {
  const email = (process.env.ADMIN_EMAIL || 'admin@example.com').toLowerCase()
  const password = process.env.ADMIN_PASSWORD
  if (!password) throw new Error('ADMIN_PASSWORD is required to seed an administrator')
  await User.findOneAndUpdate({ email }, { email, password: await hashPassword(password), role: 'admin' }, { upsert: true, new: true, setDefaultsOnInsert: true })
}
