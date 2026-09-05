import SiteSettings from '../models/SiteSettings.js'

export default async function seedSettings() {
  await SiteSettings.findOneAndUpdate({ key: 'site' }, { key: 'site', value: { locale: 'en', enabled: true } }, { upsert: true, new: true, setDefaultsOnInsert: true })
}
