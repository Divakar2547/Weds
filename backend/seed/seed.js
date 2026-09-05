import 'dotenv/config'
import mongoose from 'mongoose'
import connectDb from '../config/db.js'
import seedAdmin from './seedAdmin.js'
import seedWedding from './seedWedding.js'
import seedEvents from './seedEvents.js'
import seedSettings from './seedSettings.js'

try {
  await connectDb()
  await seedAdmin()
  await seedWedding()
  await seedEvents()
  await seedSettings()
  console.log('Seed data created successfully')
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
} finally {
  await mongoose.disconnect()
}
